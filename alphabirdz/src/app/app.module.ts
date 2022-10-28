import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CardComponent } from './components/card/card.component';
import { ForumComponent } from './components/forum/forum.component';
import { FooterComponent } from './components/footer/footer.component';
import { BirdService } from './services/bird.service';
import { GuideComponent } from './components/guide/guide.component';
import { SelectFilterComponent } from './components/select-filter/select-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuListComponent,
    UserListComponent,
    LandingPageComponent,
    CardComponent,
    ForumComponent,
    FooterComponent,
    GuideComponent,
    SelectFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BirdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
