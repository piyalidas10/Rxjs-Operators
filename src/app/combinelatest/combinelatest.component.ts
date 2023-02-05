import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { combineLatest, from, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-combinelatest',
  templateUrl: './combinelatest.component.html',
  styleUrls: ['./combinelatest.component.scss']
})
export class CombinelatestComponent implements OnInit {
  item1: any;
  item2: any;
  item3: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const color$ = from(['white', 'green', 'red', 'blue']);
    const logo$ = from(['fish', 'dog', 'bird', 'cow']);
    combineLatest(color$, logo$)
    .subscribe(([color, logo]) => console.log(`${color} =====> ${logo}`));

    const color1$ = from(['white1', 'green1', 'red1', 'blue1']);
    const logo1$ = from(['fish1']);
    combineLatest(color1$, logo1$)
    .subscribe(([color, logo]) => console.log(`${color} =====> ${logo}`));

    const amount = of(70, 72, 76, 79, 75);
    const conversionRate = of(0.06, 0.07, 0.08);
    const fees = combineLatest(amount, conversionRate).pipe(
      map(([a, r]) => (a * r)),
    );
    fees.subscribe(x => console.log('commission is ' + x));
  }

}
