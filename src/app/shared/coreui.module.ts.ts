import { NgModule } from '@angular/core';
import {
  NavbarModule,
  CollapseModule,
  SidebarModule,
  HeaderModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';  // Correctly importing IconModule
import { NgScrollbarModule } from 'ngx-scrollbar';
import { IconSetService } from '@coreui/icons-angular';

@NgModule({
  imports: [
    NavbarModule,
    CollapseModule,
    SidebarModule,
    IconModule,  // Import IconModule for icons
    HeaderModule,
    NgScrollbarModule, // Import ScrollbarModule for ng-scrollbar
    IconSetService
  ],
  exports: [
    NavbarModule,
    CollapseModule,
    SidebarModule,
    IconModule,  // Exporting IconModule for use in other components
    HeaderModule,
    NgScrollbarModule,// Exporting ScrollbarModule
    IconSetService
  ]
})
export class SharedCoreUIModule {}
