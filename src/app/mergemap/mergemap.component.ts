import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { map, mapTo, mergeAll, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {

  item1: any;
  item2: any;
  item3: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const item1 = interval(1000).pipe(mapTo('one')); // mapping + convert to ovservable
    const item2 = interval(500).pipe(mapTo('two')); // mapping + convert to ovservable
    const item3 = interval(1500).pipe(mapTo('three')); // mapping + convert to ovservable
    /*
      from --- convert observable from array
      here use from to convert observable from array of ovservables 
    */
    const demo = from([item1, item2, item3]); 

    // mergeMap = map + mergeAll
    // demo.pipe(
    //   map(res => res),
    //   mergeAll()
    // )
    // .subscribe(res => console.log(res));

    demo.pipe(
      switchMap(res => res)   // convert observable from values
    )
    .subscribe(res => console.log(res));
  }

}
