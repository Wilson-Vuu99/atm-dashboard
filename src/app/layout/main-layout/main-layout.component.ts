import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedCoreUIModule} from '../../shared/coreui.module.ts'
import { MainHeaderComponent } from '../header/header.component';
import { MainSidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  imports: [
    RouterOutlet,
    SharedCoreUIModule,
    MainHeaderComponent,
    MainSidebarComponent
  ]
})
export class MainLayoutComponent {}
