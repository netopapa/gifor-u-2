import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RouterModule } from '@angular/router';

const AppRouter: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'home/:q',
        component: HomeComponent
    }
];

export const RoutingModule = RouterModule.forRoot(AppRouter);
