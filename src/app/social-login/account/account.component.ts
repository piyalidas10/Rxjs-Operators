import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  user: SocialUser;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.socialUser.subscribe((user) => this.user = user);
  }

  logOut(): void {
    this.authenticationService
        .logout()
        .subscribe();
  }

}
