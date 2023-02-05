import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean;
  user: SocialUser;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.checkLoggedIn().subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

}
