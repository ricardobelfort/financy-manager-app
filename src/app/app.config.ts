import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { FinancyPreset } from './theme-preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: FinancyPreset,
        options: {
          prefix: 'p',
          darkModeSelector: false,
          cssLayer: false,
          ripple: true,
        },
      },
    }),
  ],
};
