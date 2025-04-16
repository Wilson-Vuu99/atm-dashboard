import { Component } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component'; // Import MainLayoutComponent
import { DefaultHeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Mark as a standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MainLayoutComponent, DefaultHeaderComponent],  // Import the components used in the template
})
export class AppComponent {
  title = 'ATM Dashboard';
}
