import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedCoreUIModule } from '../../shared/coreui.module.ts'; // Make sure this is correct

interface NavItem {
  name: string;
  path: string;
  icon?: string; // CoreUI icon class, optional
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'], // optional, for custom styles
  imports: [
    SharedCoreUIModule,  // brings in all CoreUI sidebar modules
    CommonModule,        // for *ngFor, *ngIf
    RouterModule         // for [routerLink]
  ],
})
export class MainSidebarComponent {
  navItems: NavItem[] = [
    { name: 'Dashboard 1', path: '/dashboard-1', icon: 'cil-speedometer' },
    { name: 'Dashboard 2', path: '/dashboard-2', icon: 'cil-chart' },
    // add more items as needed
  ];
}
