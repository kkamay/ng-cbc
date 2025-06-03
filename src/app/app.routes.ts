import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'cbc',
        loadComponent: () => import('./cbc/cbc').then((x) => x.Cbc)
    }
];
