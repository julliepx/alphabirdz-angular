import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {email: '', password: ''}

  constructor() { }

  ngOnInit(): void {
  }

  public login(): void {
    console.log("Teste login:" + this.user.email + " senha:" + this.user.password)
  }


}
