import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { GuideComponent } from './components/guide/guide.component';
import { FeedComponent } from './components/feed/feed.component';
import { SightComponent } from './components/sight/sight.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'feed/add', component: SightComponent},
  { path: 'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }