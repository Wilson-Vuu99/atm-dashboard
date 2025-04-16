import { Component } from '@angular/core';
import { DefaultHeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-mainlayout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  imports: [DefaultHeaderComponent],
})
export class MainLayoutComponent {}
