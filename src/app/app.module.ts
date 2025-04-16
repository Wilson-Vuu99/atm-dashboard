import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component'; // Import MainLayoutComponent
import { NavbarModule } from '@coreui/angular'; // CoreUI Navbar module
import { RouterModule, RouterLink } from '@angular/router'; // Router modules for navigation
import { DefaultHeaderComponent } from './layout/header/header.component'; // Header component
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,  // Declare MainLayoutComponent
    DefaultHeaderComponent,
  ],
  imports: [
    BrowserModule,
    NavbarModule, 
    RouterModule, 
    RouterLink,
    AppRoutingModule,
      
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
