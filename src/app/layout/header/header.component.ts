import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  HeaderModule,
  HeaderBrandComponent,
  HeaderNavComponent,
  NavItemComponent,
  SidebarModule,
  ContainerComponent,
  NavbarModule,
  SidebarToggleDirective,
  ButtonModule,
  SidebarNavComponent,
} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilUser, cilBell,cilMenu } from '@coreui/icons';

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
    SidebarModule,
    SidebarToggleDirective,
    ButtonModule,
    SidebarNavComponent,
  ],
  templateUrl: './header.component.html'
})
export class MainHeaderComponent {
  private iconSet = inject(IconSetService);

  constructor() {
    this.iconSet.icons = {
      cilBell,
      cilUser,
      cilMenu
    };
  }
}
