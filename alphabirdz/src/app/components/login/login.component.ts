import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user!: User;
  isLogged!: boolean;
  errorMessage!: string;


  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  public onSubmit(): any {
    this.userService.login(this.loginForm.value).subscribe(data => {
      this.user = data;
      this.isLogged = true;
    },
    error => this.isLogged = false
    );
  }
}
