import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: 'app-home',component: HomeComponent},
    {path: '', redirectTo: '/app-home', pathMatch: 'full'}
];
