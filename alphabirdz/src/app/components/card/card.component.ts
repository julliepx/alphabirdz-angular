import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Birds } from 'src/app/interfaces/birds';
import { BirdService } from 'src/app/services/bird.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {
  @Input() filter: Array<any> = [];

  birds: Birds[] = [];

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
    this.filter = ["birdSize", 100];
  }

  getAllBirds(): void { 
      this.birdService.getAllBirds().subscribe(data => {this.birds = data});
  }
  
  toInteger(str: string) {
    return Number(str)
  }

  toString(n: number) {
    return String(n)
  }

  showDetails(id: number){
    const birdCard = document.getElementById(`${id}`);
    const infoButton = document.getElementById(`button${id}`)
    
    if (birdCard?.classList.contains("hide_details")){
      birdCard?.classList.remove("hide_details");
      if (infoButton != undefined){
        infoButton.innerHTML = "Menos informações"
      }
    }else{
      birdCard?.classList.add("hide_details");
      if (infoButton != undefined){
        infoButton.innerHTML = "Mais informações"
      }
    }
  }
}
