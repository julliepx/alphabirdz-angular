import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CardComponent } from './components/card/card.component';
import { FeedComponent } from './components/feed/feed.component';
import { FooterComponent } from './components/footer/footer.component';
import { BirdService } from './services/bird.service';
import { GuideComponent } from './components/guide/guide.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SelectFilterComponent } from './components/select-filter/select-filter.component';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { SightComponent } from './components/sight/sight.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuListComponent,
    UserListComponent,
    LandingPageComponent,
    CardComponent,
    FeedComponent,
    FooterComponent,
    GuideComponent,
    SightComponent,
    LoginComponent,
    RegisterComponent,
    SelectFilterComponent,
    SightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BirdService, PostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
