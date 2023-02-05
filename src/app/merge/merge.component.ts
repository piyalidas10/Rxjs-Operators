import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, merge, of } from 'rxjs';
import { map, subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  item1: any;
  item2: any;
  item3: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.item1 = this.getPostRightUrl(1);
    this.item2 = this.getPostWrongUrl(2);
    this.item3 = this.getPostRightUrl(3);
    merge(this.item1, this.item2, this.item3).subscribe((res) => console.log('Merge => ', res));
  }

  getPostRightUrl(id): any {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  getPostWrongUrl(id): any {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }

}
