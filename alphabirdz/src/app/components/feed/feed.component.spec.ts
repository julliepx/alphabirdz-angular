import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { BirdService } from 'src/app/services/bird.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { SightComponent } from '../sight/sight.component';
import { FeedComponent } from './feed.component';

fdescribe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;
  let postService: PostService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedComponent ],
      providers: [PostService, HttpClient, HttpHandler, BirdService, UserService, FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the sight component', () => {
    const sightCom = TestBed.createComponent(SightComponent);
    const sightComInstance = sightCom.nativeElement;
    const newSightButton = fixture.nativeElement.querySelector('#newSightButton');

    newSightButton.click();
    fixture.detectChanges();

    expect(sightComInstance.innerHTML).toContain('Cadastrar Avistamento'); 
  });
});
