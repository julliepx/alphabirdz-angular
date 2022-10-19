import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';
import { GuideComponent } from './guide/guide.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuListComponent,
    UserListComponent,
    HomeComponent,
    ForumComponent,
    GuideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
