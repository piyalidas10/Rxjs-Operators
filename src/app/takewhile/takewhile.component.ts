import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { flatMap, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-takewhile',
  templateUrl: './takewhile.component.html',
  styleUrls: ['./takewhile.component.scss']
})
export class TakewhileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // I am checking if the user is logged in and sending a http request every 10 minutes until the user is in that component.
    // const secondsCounter = interval(60000); // Refreshes every 10 minutes
    // secondsCounter
    // .pipe(
    //   tap(console.log),
    //   takeWhile(x => this.notificationService.isLoggedIn()),
    //   flatMap(() => this.notificationService.getNotifications(this.token))
    // ).subscribe();
  }

}
