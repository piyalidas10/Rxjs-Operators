import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { SocialAuthService } from 'angularx-social-login';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private socialAuthService: SocialAuthService
    ) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.socialAuthService.authState
            .pipe(
                take(1),
                map((user) => !user),
                map((result) => {
                    if (!result) {
                        this.router.navigate([ '/' ]);
                    }
                    return result;
                }),
            );
    }

}