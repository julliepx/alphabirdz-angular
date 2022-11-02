import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Bird } from 'src/app/interfaces/bird';
import { Post } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user';
import { BirdService } from 'src/app/services/bird.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sight',
  templateUrl: './sight.component.html',
  styleUrls: ['./sight.component.css']
})
export class SightComponent implements OnInit {

  sightForm!: FormGroup;

  post: Post;
  selectedUser: User;
  selectedBird: Bird;

  posts: Post[] = [];
  birds: Bird[] = [];
  users: User[] = [];

  constructor(private postService: PostService, private birdService: BirdService, private userService: UserService, private formBuilder: FormBuilder) {
    this.post = <Post>{};
    this.selectedUser = <User>{};
    this.selectedBird = <Bird>{};
    this.getAllPosts();
    this.getAllBirds();
    this.getAllUsers();
  }

  ngOnInit(): void { 
    this.sightForm = this.formBuilder.group ({
      image: [null],
      location: [null],
      date: [null],
      user: this.formBuilder.group({
        id: [null],
        username: [null],
        email: [null],
        password: [null],
        profilePhoto: [null]
      }),
      bird: this.formBuilder.group({
        id: [null],
        image: [null],
        englishName: [null],
        latinName: [null],
        portugueseName: [null],
        dominantColor: [null],
        gender: [null],
        habitat: [null],
        family: [null],
        birdSize: [null]
      }),
    });
  }

  getAllPosts(): Array<Post> { 
    this.postService.getAllPosts().subscribe(data => {this.posts = data});
    
    return this.posts;
  }

  getAllBirds(): Array<Bird> {
    this.birdService.getAllBirds().subscribe(data => {this.birds = data});

    return this.birds;
  }

  getAllUsers(): Array<User> {
    this.userService.getAllUsers().subscribe(data => {this.users = data});

    return this.users;
  }

  onSubmit(): void {
    this.post.user = this.selectedUser;
    this.post.bird = this.selectedBird;

    this.postService.savePost(this.sightForm.value).subscribe(data => {this.post = data});
    console.log(this.sightForm.value);
  }
}
