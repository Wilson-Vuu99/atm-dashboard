// app.component.ts

import { Component, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component'; 
import { routes } from './app.routes'; 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, MainLayoutComponent]
})
export class AppComponent {}
