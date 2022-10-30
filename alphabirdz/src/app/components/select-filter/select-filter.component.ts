import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Bird } from 'src/app/interfaces/bird';
import { BirdService } from 'src/app/services/bird.service';


@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.css']
})

export class SelectFilterComponent implements OnInit {
  @Output() filterSelected = new EventEmitter();
  birds: Bird[] = [];
  allColors: any = new Set();
  selected: Array<string> = [];

  filterSelection: object = {
    color: "",
    gender: "",
    size: ""
  };

  birds2: Bird[] = [
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

  filterColors(arr: Array<Bird>) {
    arr.forEach(bird => {
        this.allColors.add(bird.dominantColor);
      });
  }

  getAllBirds() {
    this.birdService.getAllBirds().subscribe((bird: Bird[]) => {
      this.birds = bird;
    });
  }
}