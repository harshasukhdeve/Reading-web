import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovelsComponent } from './novels/novels.component';
import { ContactusComponent } from './contactus/contactus.component';
import {AboutusComponent } from './aboutus/aboutus.component';
import { NewsheadlineComponent } from './newsheadline/newsheadline.component';

const routes: Routes = [
  { path: '', component: NovelsComponent },

  {
    path: 'novels',
    component: NovelsComponent,
  }, 
  {
    path: 'contactus',
    component: ContactusComponent,
  }, 
  {
    path: 'aboutus',
    component: AboutusComponent,
  }, 
  {
    path: 'newsheadline',
    component: NewsheadlineComponent,
  },
   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}