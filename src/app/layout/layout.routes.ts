import { Routes } from '@angular/router';
import { authGuard } from '../shared/data-access/auth.guard';
import { nonAuthGuard } from '../shared/data-access/non-auth.guard';

export default [
    {
        path: '',
        loadComponent: () => import('../home/home.component'),
    },
    {
        path: 'login',
        canMatch: [nonAuthGuard()],
        loadComponent: () => import('../login/login.component'),
    },
    {
        path: 'register',
        canMatch: [nonAuthGuard()],
        loadComponent: () => import('../register/register.component'),
    },
    {
        path: 'editor',
        canMatch: [authGuard()],
        loadChildren: () => import('../editor/editor.routes'),
    },
    {
        path: 'settings',
        canMatch: [authGuard()],
        loadComponent: () => import('../settings/settings.component'),
    },
    {
        path: 'article/:slug',
        canMatch: [authGuard()],
        loadComponent: () => import('../article/article.component'),
    },
    {
        path: 'profile/:username',
        canMatch: [authGuard()],
        loadChildren: () => import('../profile/profile.routes'),
    },
] as Routes;
