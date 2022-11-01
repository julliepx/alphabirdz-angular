import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BirdService } from 'src/app/services/bird.service';

import { CardComponent } from './card.component';

fdescribe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let httpController: HttpTestingController;
  let birdService: BirdService;
  let httpClient : HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      providers: [BirdService, HttpClient, HttpHandler, HttpTestingController]
    })
    .compileComponents();
    birdService = TestBed.inject(BirdService);
    httpController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call showDetails() method when the user click on "Mais informações" button', () => {
    
    const headers = new HttpHeaders().set('Custom-Header', 'test');
    void httpClient.get('http://localhost:4200/guide', {headers}).subscribe();
    const req = httpController.match('http://localhost:4200/guide');
    expect(component.showDetails(0)).toHaveBeenCalled();
  })

  it('should have Latin Name visible when the user clicks on "Mais informações" button', () => {
    const infoButton = fixture.debugElement.nativeElement.querySelector('.details__button');
    infoButton.click();
    fixture.detectChanges();
    const latinName = fixture.debugElement.nativeElement.querySelector('#latin__name').innerHTML;
    expect(latinName).toBe('Nome em Latim')
  })


});
