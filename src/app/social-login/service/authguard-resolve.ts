import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
 
@Injectable()
export class AuthguardResolve implements Resolve<any>{
 
    constructor(private authenticationService: AuthenticationService) {
    }
 
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.authenticationService
            .checkLoggedIn()
            .pipe(
                take(1),
                catchError(() => of(false)),
                map(() => true)
            );
    }
}
