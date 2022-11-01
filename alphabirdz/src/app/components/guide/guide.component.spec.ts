import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideComponent } from './guide.component';

import { BirdService } from 'src/app/services/bird.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GuideComponent', () => {
  let component: GuideComponent;
  let fixture: ComponentFixture<GuideComponent>;

  let httpController: HttpTestingController;
  let birdService: BirdService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ GuideComponent ],
      providers: [ BirdService ]
    })
    .compileComponents();

    birdService = TestBed.inject(BirdService);
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
