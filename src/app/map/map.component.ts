import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private http: HttpClient) {
    const demo = this.http.get('./assets/sample.json').pipe(
      tap(res => console.log('original res => ', res)),
      map(res => res['data']));
    demo.subscribe(res => console.log(res));
   }

  ngOnInit(): void {
    
  }

}
