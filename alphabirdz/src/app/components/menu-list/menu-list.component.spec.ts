import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostService } from 'src/app/services/post.service';
import { FeedComponent } from '../feed/feed.component';
import { GuideComponent } from '../guide/guide.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';

import { MenuListComponent } from './menu-list.component';

describe('MenuListComponent', () => {
  // Dado que o menu esteja aberto
  // Quando o usuario apertar em guia de bolso
  // Então deverá redirecionar para o GuideComponent

  // Dado que o menu esteja aberto
  // Quando o usuario apertar em home
  // Então deverá redirecionar para o LandingPageComponent

  // Dado que o menu esteja aberto
  // Quando o usuario apertar em feed
  // Então deverá redirecionar para o FeedComponent

  let component: MenuListComponent;
  let fixture: ComponentFixture<MenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuListComponent ],
      providers: [ PostService, HttpClient, HttpHandler ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Redirect guide', () => {
    const fixture = TestBed.createComponent(MenuListComponent);
    const fixture2 = TestBed.createComponent(GuideComponent).nativeElement;
    fixture.detectChanges();
    const compiled = fixture.nativeElement.children[0].children[0].children[0];
    compiled.click();
    fixture.detectChanges();

    expect(fixture2.innerHTML).toContain('filter');
  });

  it('Redirect feed', () => {
    const fixture = TestBed.createComponent(MenuListComponent);
    const fixture2 = TestBed.createComponent(FeedComponent).nativeElement;
    fixture.detectChanges();
    const compiled = fixture.nativeElement.children[0].children[0].children[1];
    compiled.click();
    fixture.detectChanges();

    expect(fixture2.innerHTML).toContain('Novo');
  });

  it('Redirect home', () => {
    const fixture = TestBed.createComponent(MenuListComponent);
    const fixture2 = TestBed.createComponent(LandingPageComponent).nativeElement;
    fixture.detectChanges();
    const compiled = fixture.nativeElement.children[0].children[0].children[2];
    compiled.click();
    fixture.detectChanges();

    expect(fixture2.innerHTML).toContain('fotografe');
  });
});
