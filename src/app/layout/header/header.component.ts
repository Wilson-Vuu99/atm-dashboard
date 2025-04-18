import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  HeaderModule,
  HeaderBrandComponent,
  HeaderNavComponent,
  NavItemComponent,
  NavLinkDirective,
  ContainerComponent,
  NavbarModule,
} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilUser, cilBell } from '@coreui/icons';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    HeaderModule,
    NavbarModule,
    ContainerComponent,
    HeaderBrandComponent,
    HeaderNavComponent,
    NavItemComponent,
    NavLinkDirective,
  ],
  templateUrl: './header.component.html'
})
export class MainHeaderComponent {
  private iconSet = inject(IconSetService);

  constructor() {
    this.iconSet.icons = {
      cilBell,
      cilUser,
    };
  }
}
