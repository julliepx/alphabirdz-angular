import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Post } from 'src/app/interfaces/post';
import { BirdService } from 'src/app/services/bird.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

import { SightComponent } from './sight.component';

describe('SightComponent', () => {
  let component: SightComponent;
  let fixture: ComponentFixture<SightComponent>;

  let post: Post = ({ 
    id: 1,
    image: 'postImage', 
    location: 'postLocation', 
    date: 'postDate', 
    user: { 
      id: 1, 
      username: 'joe', 
      email: 'joe@joe.com', 
      password: '123456', 
      profilePhoto: 'userPhoto' 
    }, 
    bird: { 
      id: 1, 
      image: 'birdImage', 
      englishName: 'birdEnglishName', 
      latinName: 'birdLatinName', 
      portugueseName: 'birdPortugueseName', 
      dominantColor: 'birdDominantColor', 
      gender: 'birdGender', 
      habitat: 'birdHabitat', 
      family: 'birdFamily', 
      birdSize: 'birdSize' 
    } 
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightComponent],
      providers: [PostService, BirdService, UserService, HttpClient, HttpHandler, FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the form', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Cadastrar Avistamento');
  });

  /* it('should send the form with the right data', () => {
    const form = fixture.nativeElement.querySelector('form');
    const input = fixture.nativeElement.querySelector('input');
    const button = fixture.nativeElement.querySelector('button');

    input.value = { 
      id: 1,
      image: 'postImage', 
      location: 'postLocation', 
      date: 'postDate', 
      user: { 
        id: 1, 
        username: 'joe', 
        email: 'joe@joe.com', 
        password: '123456', 
        profilePhoto: 'userPhoto' 
      }, 
      bird: { 
        id: 1, 
        image: 'birdImage', 
        englishName: 'birdEnglishName', 
        latinName: 'birdLatinName', 
        portugueseName: 'birdPortugueseName', 
        dominantColor: 'birdDominantColor', 
        gender: 'birdGender', 
        habitat: 'birdHabitat', 
        family: 'birdFamily', 
        birdSize: 'birdSize' 
      }
    }

    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    button.click();
    fixture.detectChanges();

    expect(input.value).toContain(post);
  }); */
});
