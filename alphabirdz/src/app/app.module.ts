import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { GuideComponent } from './components/guide/guide.component';
import { ForumComponent } from './components/forum/forum.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuListComponent,
    UserListComponent,
    LandingPageComponent,
    GuideComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
