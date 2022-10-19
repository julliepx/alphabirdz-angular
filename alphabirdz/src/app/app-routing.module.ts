import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuideComponent } from './guide/guide.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guia', component: GuideComponent },
  { path: 'forum', component: ForumComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }