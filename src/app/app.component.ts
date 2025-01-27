import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; // Import the navbar

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, NavbarComponent], // Add NavbarComponent to imports
  template: `
    <app-navbar></app-navbar> <!-- Add this line -->
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent { }