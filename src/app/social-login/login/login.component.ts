import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  socialMedia = ['google', 'facebook'];
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  socialLogin(option): void {
    this.authenticationService.login(option);
  }

}
