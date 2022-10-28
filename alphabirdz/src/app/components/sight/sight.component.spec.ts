import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightComponent } from './sight.component';

describe('SightComponent', () => {
  let component: SightComponent;
  let fixture: ComponentFixture<SightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightComponent ]
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
