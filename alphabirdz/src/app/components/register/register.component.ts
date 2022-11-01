import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  user!: User;

  constructor(private userService: UserService) { 

  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      profilePhoto: new FormControl(''),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }


  public onSubmit(): void {
    this.userService.saveUser(this.registerForm.value).subscribe(data => {this.user = data})
    console.log(this.user)
  }
}
