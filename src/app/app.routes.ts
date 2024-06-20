import { Routes } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home Page',
        component: HomeComponent,
    },
    {
    path: 'signup',
    title: 'Signup Page',
    component: SignupComponent,
    },
    {
    path: 'signin',
    title: 'Signin Page',
    component: SigninComponent,
    },
    {
    path: 'about',
    title: 'About Page',
    component: AboutComponent,
    }
];

