import { ApplicationConfig } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';

import { routes, routerOptions } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withRouterConfig(routerOptions)), provideAnimationsAsync(), {provide: LocationStrategy, useClass: HashLocationStrategy} ],
};
