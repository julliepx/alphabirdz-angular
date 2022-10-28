import { Component, OnInit, Input } from '@angular/core';
import { SelectFilterComponent } from '../select-filter/select-filter.component';

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

  test2(event: Array<string>) {
    this.selectedColor = event;
  }
}
