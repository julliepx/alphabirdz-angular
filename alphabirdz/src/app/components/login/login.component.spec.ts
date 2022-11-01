import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserService } from 'src/app/services/user.service';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [LoginComponent],
      providers: [UserService, HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to registerPage when user click on "cadastre-se" button', () => {
    const registerComponent = TestBed.createComponent(RegisterComponent);
    const registerButton = fixture.debugElement.nativeElement.querySelector('button');
    registerButton.click();
    expect(registerComponent).toBeTruthy();
  })
});
