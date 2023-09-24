import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'section1', component: Section1Component },
  { path: 'section2', component: Section2Component },
  { path: 'section3', component: Section3Component },
  { path: 'section4', component: Section4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
