import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, from, zip } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent implements OnInit {
  item1: any;
  item2: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.item1 = this.getPost(1);
    this.item2 = this.getPost(2);
    forkJoin(this.item1, this.item2).subscribe((res) => console.log(res));
    
    const color$ = from(['white', 'green', 'red', 'blue']);
    const logo$ = from(['fish', 'dog', 'bird', 'cow']);
    forkJoin(color$, logo$)
    .subscribe(([color, logo]) => console.log(`${color} =====> ${logo}`));

    const color1$ = from(['white1', 'green1', 'red1', 'blue1']);
    const logo1$ = from(['fish1', 'dog1']);
    forkJoin(color1$, logo1$)
    .subscribe(([color, logo]) => console.log(`${color} =====> ${logo}`));
  }

  getPost(id): any {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id).pipe(shareReplay(1));
  }

}
