import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, zip } from 'rxjs';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit {

  item1: any;
  item2: any;
  item3: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const color$ = from(['white', 'green', 'red', 'blue']);
    const logo$ = from(['fish', 'dog', 'bird', 'cow']);
    zip(color$, logo$)
    .subscribe(([color, logo]) => console.log(`${color} =====> ${logo}`));


    const color1$ = from(['white1', 'green1', 'red1', 'blue1']);
    const logo1$ = from(['fish1', 'dog1']);
    zip(color1$, logo1$)
    .subscribe(([color, logo]) => console.log(`${color} =====> ${logo}`));


    this.item1 = this.http.get('https://jsonplaceholder.typicode.com/users');
    this.item2 = this.http.get('https://jsonplaceholder.typicode.com/comments');
    this.item3 = this.http.get('https://jsonplaceholder.typicode.com/posts');
    zip(this.item1, this.item2, this.item3).subscribe((res) => console.log('zip => ', res));
  }

}
