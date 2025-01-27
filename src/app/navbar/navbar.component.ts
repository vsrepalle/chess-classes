import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { Component } from '@angular/core';  // Make sure this import is here


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    RouterLinkActive,
    MatToolbarModule, // Add Angular Material modules
    MatButtonModule,
    MatMenuModule
  ],
  template: `
    <mat-toolbar color="primary">
      <span class="logo">Chess Academy</span>
      <div class="spacer"></div>
      <button mat-button routerLink="/" routerLinkActive="active-link">Home</button>
      <button mat-button routerLink="/courses" routerLinkActive="active-link">Courses</button>
      <button mat-button [matMenuTriggerFor]="menu">Account</button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item routerLink="/login">Login</button>
        <button mat-menu-item routerLink="/signup">Sign Up</button>
      </mat-menu>
    </mat-toolbar>
  `,
  styles: [`
    .logo { margin-right: 20px; }
    .spacer { flex: 1 1 auto; }
    .active-link { background-color: rgba(255, 255, 255, 0.1); }
  `]
})
export class NavbarComponent { }