
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'app-products',
    loadChildren: () => loadRemoteModule('appProducts', './routes').then((m) => m.routes),
  },

  {
    path: 'appUsers',
    loadComponent: () =>
      loadRemoteModule('appUsers', './Component').then((m) => m.AppComponent),
  }

];
