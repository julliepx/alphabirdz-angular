import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Bird } from 'src/app/interfaces/bird';
import { BirdService } from 'src/app/services/bird.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {
  @Input() filter: Array<any> = [];

  birds: Bird[] = [];

  constructor(private birdService: BirdService) {
      this.getAllBirds();
  }

  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */  }

  getAllBirds(): void { 
      this.birdService.getAllBirds().subscribe(data => {this.birds = data});
  }

  filterCards(obj: Array<any>, data: Array<any>): Array<Bird> {
    let key: string = data[0];
    let value: string = data[1];
    let newValue: Array<string> = [];

    if (key == 'birdSize') {
        return obj.filter((objs) => {
            newValue = value.split(",")
            if (Number(objs[key]) >= Number(newValue[0]) && objs[key] <= Number(newValue[1]) ) {
                return objs;
            }
        });
    } else {
        return obj.filter((objs) => {
            if (objs[key] == value) {
                return objs;
            }
        });
    }
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

// birdsTest: Bird[] = [
//   {
//     id: 0,
//     image: 'string',
//     englishName: 'string',
//     latinName: 'string',
//     portugueseName: '1',
//     dominantColor: 'green',
//     gender: 'female',
//     habitat: 'string',
//     family: 'string',
//     birdSize: '24',
//   },
//   {
//     id: 1,
//     image: 'string',
//     englishName: 'string',
//     latinName: 'string',
//     portugueseName: '2',
//     dominantColor: 'blue',
//     gender: 'male',
//     habitat: 'string',
//     family: 'string',
//     birdSize: '43',
//   },
//   {
//     id: 2,
//     image: 'string',
//     englishName: 'string',
//     latinName: 'string',
//     portugueseName: '3',
//     dominantColor: 'green',
//     gender: 'female',
//     habitat: 'string',
//     family: 'string',
//     birdSize: '10',
//   },
//   {
//     id: 3,
//     image: 'string',
//     englishName: 'string',
//     latinName: 'string',
//     portugueseName: '4',
//     dominantColor: 'red',
//     gender: 'male',
//     habitat: 'string',
//     family: 'string',
//     birdSize: '51',
//   }
// ]