import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit { 

  @Output() isOpen = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

   openUser() {
    this.isOpen.emit("ok");
  }

}
