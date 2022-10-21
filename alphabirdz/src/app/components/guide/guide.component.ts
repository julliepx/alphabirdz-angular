import { Component, OnInit } from '@angular/core';
import { birds } from 'src/app/birds';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})

export class GuideComponent implements OnInit {
  birds = birds;

  constructor() { }

  ngOnInit(): void {
    
  }

}
