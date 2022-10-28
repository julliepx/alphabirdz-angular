import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Bird } from 'src/app/interfaces/bird';
import { BirdService } from 'src/app/services/bird.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {

  birds: Bird[] = [];
  //status: string = 'Mais informações';
  //isOpen: boolean = false;

  constructor(private birdService: BirdService) {
      this.getAllBirds();
  }

  ngOnInit(): void {}

  getAllBirds(): void { 
      this.birdService.getAllBirds().subscribe(data => {this.birds = data});
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
    console.log(birdCard);
  }
}