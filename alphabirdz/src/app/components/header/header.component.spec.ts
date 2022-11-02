import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedComponent } from '../feed/feed.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { MenuListComponent } from '../menu-list/menu-list.component';
import { UserListComponent } from '../user-list/user-list.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the landing page component', () => {
    const landingPageCom = TestBed.createComponent(LandingPageComponent);
    const landingPageComInstance = landingPageCom.nativeElement;
    const logo = fixture.nativeElement.querySelector('#logo');

    logo.click();
    fixture.detectChanges();

    expect(landingPageComInstance.innerHTML).toContain('fotografe'); 
  });

  it('should render the menu list component', () => {
    const menuListCom = TestBed.createComponent(MenuListComponent);
    const menuListComInstance = menuListCom.nativeElement;
    const menuList = fixture.nativeElement.querySelector('#menuButton');

    menuList.click();
    fixture.detectChanges();

    expect(menuListComInstance.innerHTML).toContain('Feed');
  });
  
  it('should render the feed component', () => {
    const userMenuCom = TestBed.createComponent(UserListComponent);
    const userMenuComInstance = userMenuCom.nativeElement;
    const userMenuList = fixture.nativeElement.querySelector('#userMenuButton');

    userMenuList.click();
    fixture.detectChanges();

    expect(userMenuComInstance.innerHTML).toContain('Login');  
  });
});

