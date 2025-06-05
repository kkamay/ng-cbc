import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./hello-world/hello-world').then((x) => x.HelloWorld)
    },
    {
        path: 'cbc',
        loadComponent: () => import('./cbc/cbc').then((x) => x.Cbc)
    }
];
