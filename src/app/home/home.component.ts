import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Register Swiper custom elements
register();

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    // Add these lines
    MatCardModule,
    MatButtonModule,
    // Other imports (RouterLink, etc.)
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