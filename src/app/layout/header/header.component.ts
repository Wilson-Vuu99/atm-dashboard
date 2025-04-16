import { Component } from '@angular/core';
import { CollapseDirective, ContainerComponent, NavbarComponent, NavbarTogglerDirective } from '@coreui/angular';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [
    CollapseDirective,
    NavbarComponent,
    ContainerComponent,
    NavbarTogglerDirective,
  ]
})
export class DefaultHeaderComponent {
  // State for controlling collapse
  isCollapsed = true;  // Set initial state of collapse
}
