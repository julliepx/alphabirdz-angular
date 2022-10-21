import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Birds } from 'src/app/interfaces/birds';
import { BirdService } from 'src/app/services/bird.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  birds: Birds[] = [];

  constructor(private birdService: BirdService) {
      this.getAllBirds();
  }

  ngOnInit(): void {}

  getAllBirds(): void { 
      this.birdService.getAllBirds().subscribe(data => {this.birds = data});
  }

}
