import { ExtraOptions, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AvantProposComponent } from './avant-propos/avant-propos.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
      },
      /* {
        path: '',
        component: HomeComponent,
      },
      {
        path: '/:id',
        component: HomeComponent,
      }, */
      {
        path: 'amaga-cyber',
        component: HomeComponent,
      },
      {
        path: 'amaga-cyber/:id',
        component: HomeComponent,
      },
     /*  {
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
      }, */
      { path: '**', component: HomeComponent },
];

export const routerOptions: ExtraOptions = {
    useHash: true,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    // ...any other options you'd like to use
  };
