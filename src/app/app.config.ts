import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routes';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './shared/coreui.icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideAnimations(),
    {
      provide: IconSetService,
      useFactory: () => {
        const iconService = new IconSetService();
        iconService.icons = iconSubset;
        return iconService;
      },
    }
  ],
};
