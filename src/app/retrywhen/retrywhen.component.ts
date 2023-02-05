import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { concatMap, delay, delayWhen, map, retry, retryWhen, scan, tap } from 'rxjs/operators';

@Component({
  selector: 'app-retrywhen',
  templateUrl: './retrywhen.component.html',
  styleUrls: ['./retrywhen.component.scss']
})
export class RetrywhenComponent implements OnInit {

  constructor(private http: HttpClient) {
    // this.callToAPI1();
    this.callToAPI2();
  }

  ngOnInit(): void {
  }

  callToAPI1(): void {
    /*
     retries incase of a 404 failure, is really unnecessary, but incase of 500X exceptions it is really mandatory.
    */
    this.http.get('https://jsonplaceholder.typicode.com/user').pipe(
      retry(5)
      // retryWhen((error) =>
      //   error.pipe(
      //     tap(error => console.log(error)),
      //     delay(1000),
      //     scan((retyrCount) => {
      //       if (retyrCount >= 5) {
      //         throw error;
      //       } else {
      //         retyrCount++;
      //       }
      //       return retyrCount;
      //     }, 1)
      //   )
      // )
    ).subscribe((users) => {
      console.log('users => ', users);
    }, (error) => {
      console.log(error);
    });
  }

  callToAPI2(): void {
    /*
     retries incase of a 404 failure, is really unnecessary, but incase of 500X exceptions it is really mandatory.
    */
   let retyrCount = 0;
   this.http.get('https://api.naftuli.wtf/latest/status.json').pipe(
      retryWhen((error) =>
        error.pipe(
          tap(err => console.log(err)),
          concatMap((errObj: any) => { // it produces /maps an input/observable to an output observable
            if (
              errObj instanceof HttpErrorResponse &&
              errObj.status !== 404 // indicating that the requested page is not available
            ) {
              if (retyrCount >= 4) {
                return errObj;
              } else {
                retyrCount++;
                return timer(retyrCount * 1000);
              }
            } else {
              return errObj;
            }
          })
        )
      )
    ).subscribe((users) => {
      console.log('users => ', users);
    }, (error) => {
      console.log(error);
    });
  }

}
