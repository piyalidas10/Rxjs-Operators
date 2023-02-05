import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-sharereply',
  templateUrl: './sharereply.component.html',
  styleUrls: ['./sharereply.component.scss']
})
export class SharereplyComponent implements OnInit {

  allUsers$: Observable<any>;
  maleUsers$: Observable<any>;
  femaleUsers$: Observable<any>;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    /*
    If you call every time this.http.get(API_ENDPOINT).pipe(shareReplay(1)),
    each time http request will be triggered. It will create new observable each time.
    If you want to make http call once and cache data, the following is recommended.
    */
    this.allUsers$ =  this.getAllUsers(); // storing shared observable in local variable

    this.maleUsers$ = this.allUsers$.pipe(
      map((res) => res.filter((user: any) => user.gender === 'male'))
    );
    this.femaleUsers$ = this.allUsers$.pipe(
      map((res) => res.filter((user: any) => user.gender === 'female'))
    );
  }

  getAllUsers(): Observable<any> {
    // shareReplay(1) means only one value will be cache
    return this.http.get('https://raw.githubusercontent.com/piyalidas10/dummy-json/main/fakeuser.json').pipe(shareReplay(1));
  }
}
