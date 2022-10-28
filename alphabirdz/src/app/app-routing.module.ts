import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { GuideComponent } from './components/guide/guide.component';
import { ForumComponent } from './components/forum/forum.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'login', component: LoginComponent },
  { path:'register', component: RegisterComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }