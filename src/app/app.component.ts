import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Chess Online Classes</h1>
    <router-outlet></router-outlet>
  `,
  styles: [`
    h1 { 
      text-align: center; 
      color: #333; 
      padding: 20px;
    }
  `]
})
export class AppComponent { }