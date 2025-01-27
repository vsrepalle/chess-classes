import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router'; 
import { MatToolbarModule } from '@angular/material/toolbar';

// Register Swiper custom elements
register();

@Component({
  selector: 'app-home',
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
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line
})
export class HomeComponent {
  courses = [
    {
      title: 'Beginner Fundamentals',
      description: 'Learn basic rules, moves, and strategies.'
    },
    {
      title: 'Advanced Tactics',
      description: 'Master openings and midgame strategies.'
    },
    {
      title: 'Endgame Mastery',
      description: 'Dominate the final phase of the game.'
    }
  ];
}