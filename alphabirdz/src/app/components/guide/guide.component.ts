import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Birds } from 'src/app/birds';
import { BirdService } from 'src/app/config/bird.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})

export class GuideComponent implements OnInit {

  birds: Birds[] = [];

  constructor(private birdService: BirdService) {
      this.getAllBirds();
  }

  ngOnInit(): void {
      
  }

  getAllBirds(): void { 
      this.birdService.getAllBirds().subscribe(data => {this.birds = data});
      console.log(this.birds);
  }

}
