import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ UserListComponent ],
      providers: [ UserService, HttpClient, HttpHandler ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Redirect login', () => {
  //   const fixture = TestBed.createComponent(UserListComponent);
  //   const fixture2 = TestBed.createComponent(LoginComponent).nativeElement;
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement.children[0].children[0].children[0].children[0].children[1];
  //   compiled.click();
  //   fixture.detectChanges();

  //   console.log(fixture2.innerHTML)
  // });

  // it('Redirect register', () => {
  //   const fixture = TestBed.createComponent(UserListComponent);
  //   const fixture2 = TestBed.createComponent(RegisterComponent).nativeElement;
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement.children[0].children[0].children[1];
  //   compiled.click();
  //   fixture.detectChanges();

  //   console.log(fixture2.innerHTML)

  // });
});
