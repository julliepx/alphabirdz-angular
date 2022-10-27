import { Component, OnInit } from '@angular/core';
import { Birds } from 'src/app/interfaces/birds';
import { Posts } from 'src/app/interfaces/posts';
import { Users } from 'src/app/interfaces/users';
import { BirdService } from 'src/app/services/bird.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  posts: Posts[] = [];
  users: Users[] = [];
  birds: Birds[] = [];

  constructor(private postService: PostService, private userService: UserService, private birdService: BirdService) {
    this.getAllPosts();
    this.getAllUsers();
    this.getAllBirds();
  }

  ngOnInit(): void {
  }

  getAllPosts(): void { 
    this.postService.getAllPosts().subscribe(data => {this.posts = data});
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(data => {this.users = data});
  }

  getAllBirds(): void {
    this.birdService.getAllBirds().subscribe(data => {this.birds = data});
  }

}
