import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
  @Input() filterSelected2: string[] = [];

  selected: Array<string> = [];

  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */  }

  receiveData(event: Array<string>) {
    this.selected = event;
  }
}
