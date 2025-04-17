import { Component } from '@angular/core';
import { SharedCoreUIModule} from '../../shared/coreui.module.ts'

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [SharedCoreUIModule], // Use shared CoreUI module here
})
export class MainHeaderComponent {
  isCollapsed = true;

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
