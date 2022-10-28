import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Birds } from 'src/app/interfaces/birds';
import { BirdService } from 'src/app/services/bird.service';


@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.css']
})

export class SelectFilterComponent implements OnInit {
  @Output() filterSelected = new EventEmitter();
  birds: Birds[] = [];
  allColors: any = new Set();
  selected: Array<string> = [];

  filterSelection: object = {
    color: "",
    gender: "",
    size: ""
  };

  birds2: Birds[] = [
    {
      id: 0,
      image: 'string',
      englishName: 'string',
      latinName: 'string',
      portugueseName: 'string',
      dominantColor: 'green',
      gender: 'string',
      habitat: 'string',
      family: 'string',
      birdSize: '24',
      showDetail: false
    },
    {
      id: 1,
      image: 'string',
      englishName: 'string',
      latinName: 'string',
      portugueseName: 'string',
      dominantColor: 'blue',
      gender: 'string',
      habitat: 'string',
      family: 'string',
      birdSize: '43',
      showDetail: false
    },
    {
      id: 2,
      image: 'string',
      englishName: 'string',
      latinName: 'string',
      portugueseName: 'string',
      dominantColor: 'green',
      gender: 'string',
      habitat: 'string',
      family: 'string',
      birdSize: '10',
      showDetail: false
    },
    {
      id: 3,
      image: 'string',
      englishName: 'string',
      latinName: 'string',
      portugueseName: 'string',
      dominantColor: 'red',
      gender: 'string',
      habitat: 'string',
      family: 'string',
      birdSize: '51',
      showDetail: false
    }
  ]

  constructor(private birdService: BirdService) {
    this.getAllBirds();
  }

  ngOnInit(): void {
    this.getAllBirds();
  }

  selectOption(value: string, id: string) {
    this.selected = [];
    this.selected.push(id, value);
  }

  sendFilter() {
    this.filterSelected.emit(this.selected);
  }

  filterColors(arr: Array<Birds>) {
    arr.forEach(bird => {
        this.allColors.add(bird.dominantColor);
      });
  }

  getAllBirds() {
    this.birdService.getAllBirds().subscribe((bird: Birds[]) => {
      this.birds = bird;
    });
  }
}