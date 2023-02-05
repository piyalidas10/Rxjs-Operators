import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SocialLoginComponent} from './social-login.component';
import {AuthguardResolve} from './service/authguard-resolve';
import {AuthGuard} from './service/auth-guard';

const routes: Routes = [
    {
        path: '',
        component: SocialLoginComponent,
        resolve: { loggedIn: AuthguardResolve },
        children: [
            {
                path: '',
                loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
            },
            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
                canActivate: [
                    AuthGuard,
                ],
            },
        ]
    },
    {
        path: '**',
        loadChildren: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})

export class SocialLoginRouting {
}
