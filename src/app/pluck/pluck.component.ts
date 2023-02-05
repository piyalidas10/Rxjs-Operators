import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pluck, shareReplay, toArray } from 'rxjs/operators';
import { from, fromEvent, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
  @ViewChild('txt', {static: true}) txt: ElementRef;
  allUsers: any;
  constructor(private http: HttpClient) {
    this.callToAPI();
  }

  ngOnInit(): void {
  }

  callToAPI(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
    ).subscribe((users) => {
      console.log('users => ', users);
      users[0].address = null;
      this.getNames(users);
      this.getCities(users);
    });
  }

  ngAfterViewInit(): void {
    fromEvent<any>(this.txt.nativeElement, 'input')
    .pipe(
      // map(event => event.target.value),
      pluck('target', 'value')
    )
    .subscribe((val) => console.log(val));
  }

  getNames(users) {
    //using map operator
    // from(users).pipe(
    //   map(user => user['name']),
    //   toArray()
    // ).subscribe(names => {
    //   console.log('names => ', names);
    // });
    //using pluck operator
    from(users).pipe(
      pluck('name'),
      toArray()
    ).subscribe(names => {
      console.log('names => ', names);
    });    
  }

  getCities(users) {
    from(users).pipe(
      //pluck('address', 'city'),
      map((val: any) => val.address?.city),
      // map(val => val['address']['city']),
      toArray()
    ).subscribe(cities => {
      console.log('cities => ', cities);
    });
  }


}
