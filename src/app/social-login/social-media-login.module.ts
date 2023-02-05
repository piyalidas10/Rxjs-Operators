import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SocialLoginModule, SocialAuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { AccountComponent } from './account/account.component';
import {LoginModule} from './login/login.module';
import {HomeModule} from './home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { SocialLoginComponent } from './social-login.component';
import { AuthguardResolve } from './service/authguard-resolve';
import { AuthGuard } from './service/auth-guard';
import {SocialLoginRouting} from './social-login.routing';

@NgModule({
    imports: [
      BrowserModule,
      CommonModule,
      SocialLoginModule,
      LoginModule,
      HomeModule,
      SocialLoginRouting
    ],
    providers: [
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider('230327461341-ho3ndfotnngjia8u64qflr4f9v6bsiks.apps.googleusercontent.com')
            },
            {
                id: FacebookLoginProvider.PROVIDER_ID,
                provider: new FacebookLoginProvider('clientId')
            }
          ]
        } as SocialAuthServiceConfig,
      }
    ],
    declarations: [AccountComponent, SocialLoginComponent]
  })
export class SocialMediaLoginModule { }