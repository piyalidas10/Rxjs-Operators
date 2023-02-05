import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public headers: HttpHeaders;
  public RQSTOptions: any;
  apiURL = 'https://api.github.com/search/users?q=';
  constructor(private http: HttpClient) {
    this.setHeader();
  }

  setHeader(): void {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.RQSTOptions = {
      headers: this.headers,
      responseType: 'json'
    };
  }

  getUsersByLocation(country): Observable<any> {
    return this.http.get<any>(this.apiURL + 'location:' + country)
    .pipe(
      retry(1),
      map(data => data.items),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
