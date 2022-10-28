import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Bird } from 'src/app/interfaces/bird';
import { Post } from 'src/app/interfaces/post';
import { BirdService } from 'src/app/services/bird.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-sight',
  templateUrl: './sight.component.html',
  styleUrls: ['./sight.component.css']
})
export class SightComponent implements OnInit {

  sightForm!: FormGroup;

  posts: Post[] = [];
  birds: Bird[] = [];

  constructor(private postService: PostService, private birdService: BirdService) {
    this.getAllPosts();
    this.getAllBirds();
  }

  ngOnInit(): void {
  }

  getAllPosts(): Array<Post> { 
    this.postService.getAllPosts().subscribe(data => {this.posts = data});
    
    return this.posts;
  }

  getAllBirds(): Array<Bird> {
    this.birdService.getAllBirds().subscribe(data => {this.birds = data});

    return this.birds;
  }

  onSubmit(): void {
    
  }
}
