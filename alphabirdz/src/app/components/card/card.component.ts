import { Component, OnInit, Input } from '@angular/core';
import { Birds } from 'src/app/interfaces/birds';
import { BirdService } from 'src/app/services/bird.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() color: Array<any> = [];

  test32: string = '';

  key: string = "birdSize";

  birds: Birds[] = [];

  birds2: Birds[] = [
    {
      id: 0,
      image: 'string',
      englishName: 'string',
      latinName: 'string',
      portugueseName: '0',
      dominantColor: 'green',
      habitat: 'string',
      family: 'string',
      birdSize: '24'
    },
    {
      id: 1,
      image: 'string',
      englishName: 'string',
      latinName: 'string',
      portugueseName: '1',
      dominantColor: 'blue',
      habitat: 'string',
      family: 'string',
      birdSize: '43'
    },
    {
      id: 2,
      image: 'string',
      englishName: 'string',
      latinName: 'string',
      portugueseName: '2',
      dominantColor: 'green',
      habitat: 'string',
      family: 'string',
      birdSize: '10'
    },
    {
      id: 3,
      image: 'string',
      englishName: 'string',
      latinName: 'string',
      portugueseName: '3',
      dominantColor: 'red',
      habitat: 'string',
      family: 'string',
      birdSize: '51'
    }
  ]

  constructor(private birdService: BirdService) {
      this.getAllBirds();
  }

  ngOnInit(): void {
    this.color = ["birdSize", 100];
  }

  getAllBirds(): void { 
      this.birdService.getAllBirds().subscribe(data => {this.birds = data});
  }

  onChange(event: Array<string>) {
    this.test32 = event[0]
    console.log(this.test32)
  }

  toInteger(str: string) {
    return Number(str)
  }

  toString(n: number) {
    return String(n)
  }
}
