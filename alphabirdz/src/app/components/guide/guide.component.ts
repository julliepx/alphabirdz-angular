import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
  selectedColor: Array<string> = [];
  @Input() filterSelected2: string[] = [];

  ngOnInit(): void {
    
  }

  reciveData(event: Array<string>) {
    this.selectedColor = event;
  }
}
