import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RouterModule } from '@angular/router';

const AppRouter: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: ':q',
        component: HomeComponent
    },
    {
        path: ':q/:concat',
        component: HomeComponent
    }
];

export const RoutingModule = RouterModule.forRoot(AppRouter);
