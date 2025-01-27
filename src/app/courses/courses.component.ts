import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterModule,   // Import RouterModule here
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    CommonModule
  ],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses = [
    {
      id: 1,
      title: 'Beginner Chess',
      description: 'Master the basics: rules, moves, and simple strategies.',
      duration: '4 weeks',
      price: '$99'
    },
    {
      id: 2,
      title: 'Advanced Tactics',
      description: 'Learn openings, middlegame plans, and endgame techniques.',
      duration: '6 weeks',
      price: '$149'
    },
    {
      id: 3,
      title: 'Grandmaster Training',
      description: 'Personalized coaching from world-class players.',
      duration: '8 weeks',
      price: '$299'
    }
  ];
}