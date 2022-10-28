import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openUser() {
    this.userOpen = !this.userOpen;
  }

}
