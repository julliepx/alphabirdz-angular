import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { BirdService } from 'src/app/services/bird.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { SightComponent } from './sight.component';

describe('SightComponent', () => {
  let component: SightComponent;
  let fixture: ComponentFixture<SightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightComponent ],
      providers: [PostService, BirdService, UserService, HttpClient, HttpHandler, FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the form', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Cadastrar Avistamento');
  });
});
