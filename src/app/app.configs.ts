import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

// CoreUI Modules
import {
  SidebarModule,
  NavbarModule,
  DropdownModule,
  NavModule,
  CollapseModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withRouterConfig({ onSameUrlNavigation: 'reload' })),
    importProvidersFrom(
      SidebarModule,
      NavbarModule,
      DropdownModule,
      NavModule,
      CollapseModule,
      IconModule
    ),
    provideAnimationsAsync()
  ]
};
