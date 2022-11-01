import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserService } from 'src/app/services/user.service';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule],
      declarations: [LoginComponent],
      providers: [UserService, HttpClient, HttpHandler]
    })
    .compileComponents();
    const router: Router = TestBed.inject(Router)
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should redirect to registerPage when user click on "cadastre-se" button', () => {
  //   const registerButton = fixture.debugElement.nativeElement.querySelector('a');
  //   registerButton.click();
  //   fixture.detectChanges();
  //   expect(registerTitle).toContain('Cadastre-se');
  // })

  it('should not be a valid form when user do not fill email and password', () => {
    fixture.detectChanges();
    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['password'].setValue('');

    expect(component.loginForm.valid).toBeFalsy();
  })

  it('should be a valid form when user fill email and password', () => {
    fixture.detectChanges();
    component.loginForm.controls['email'].setValue('example@example.com');
    component.loginForm.controls['password'].setValue('password');

    expect(component.loginForm.valid).toBeTruthy();
  })

})
