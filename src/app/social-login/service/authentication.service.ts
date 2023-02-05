import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, SocialUser, FacebookLoginProvider } from 'angularx-social-login';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { map, mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public socialUser: BehaviorSubject<SocialUser> = new BehaviorSubject<SocialUser>(null);
  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router
  ) { }

  public login(provider: 'google' | 'facebook'): void{
    switch (provider) {
      case 'google':
          this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
          break;
      case 'facebook':
          this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
          break;
    }
  }

  public checkLoggedIn(): Observable<SocialUser> {
    return this.socialAuthService.authState.pipe(
      map((currentUser) => this.convertToUser(currentUser))
    );
  }

  public logout(): Observable<void> {
    const logout = this.socialAuthService.signOut();
    return from(logout)
            .pipe(
                take(1),
                mergeMap(() => of(this.router.navigate([ '/' ]))),
                map(() => this.socialUser.next(null)),
            );
  }

  private convertToUser(user: SocialUser): any {
    if (!user) {
        throw new Error('no user');
    }

    //const uid = user.uid;
    const name = user.name;
    const email = user.email;
    const avatar = user.photoUrl;
    //const verified = user.emailVerified;

    return { name, email, avatar };
}

}
