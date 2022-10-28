import { Component, OnInit } from '@angular/core';
import { Bird } from 'src/app/interfaces/bird';
import { Post } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user';
import { BirdService } from 'src/app/services/bird.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) {
    this.getAllPosts();
  }

  ngOnInit(): void {
  }

  getAllPosts(): Array<Post> { 
    this.postService.getAllPosts().subscribe(data => {this.posts = data});
    
    return this.posts;
  }
}
