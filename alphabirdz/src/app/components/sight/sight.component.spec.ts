import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostService } from 'src/app/services/post.service';

import { SightComponent } from './sight.component';

describe('SightComponent', () => {
  let component: SightComponent;
  let fixture: ComponentFixture<SightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightComponent ],
      providers: [PostService, HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
