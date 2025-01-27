import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Home page route
    { path: 'courses', component: CoursesComponent }
    // Other routes...
  ];
