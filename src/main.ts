import { bootstrapApplication } from '@angular/platform-browser';  // To bootstrap the app
import { appConfig } from './app/app.config';  // Import app config
import { AppComponent } from './app/app.component';  // Import the main component

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
