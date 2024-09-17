import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: 'new',
    loadComponent: () =>
      import('./core/new/new.component').then(
        (m) => m.NewComponent
      ),
  }
];
