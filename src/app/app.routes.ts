import { ExtraOptions, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AvantProposComponent } from './avant-propos/avant-propos.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'accueil',
        component: HomeComponent,
      },
      {
        path: 'avant-propos',
        component: AvantProposComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
];

export const routerOptions: ExtraOptions = {
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    // ...any other options you'd like to use
  };
