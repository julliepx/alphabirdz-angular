import { Component, OnInit } from '@angular/core';
import { Birds } from 'src/app/interfaces/birds';
import { BirdService } from 'src/app/services/bird.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {

  birds: Birds[] = [];
  isOpen: boolean = false;
  status: string = 'Mais informações';
  display: string = 'none'


  constructor(private birdService: BirdService) {
      this.getAllBirds();
  }

  ngOnInit(): void {}

  getAllBirds(): void { 
      this.birdService.getAllBirds().subscribe(data => {this.birds = data});
  }
  
  showDetails(){
      this.isOpen == true ? this.display = 'flex' : this.display = 'none';
      this.isOpen == true ? this.status = 'Menos informações' : this.status = 'Mais informações';
  }
}
