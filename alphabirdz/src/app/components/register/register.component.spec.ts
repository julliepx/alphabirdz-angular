import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from 'src/app/services/user.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers: [UserService, HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be a valid form when user fill username, password and email at least', () => {
    fixture.detectChanges();
    component.registerForm.controls['email'].setValue('example@example.com');
    component.registerForm.controls['password'].setValue('password');
    component.registerForm.controls['username'].setValue('nameUser')

    expect(component.registerForm.valid).toBeTruthy();
  })

  it('should not be a valid form when user do not fill username, password and email at least', () => {
    fixture.detectChanges();
    component.registerForm.controls['email'].setValue('');
    component.registerForm.controls['password'].setValue('');
    component.registerForm.controls['username'].setValue('nameUser')

    expect(component.registerForm.valid).toBeFalsy();
  })
});
