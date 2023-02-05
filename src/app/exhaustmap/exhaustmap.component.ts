import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { concatMap, exhaustMap, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-exhaustmap',
  templateUrl: './exhaustmap.component.html',
  styleUrls: ['./exhaustmap.component.scss']
})
export class ExhaustmapComponent implements OnInit {
  UpdateForm: FormGroup;
  submitted = false;
  btnSub$: Subject<boolean> = new Subject();

  constructor(private http: HttpClient) {
    this.UpdateForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
      userId: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit(): void {
    this.btnSub$.pipe(
      tap(() => this.submitted = true),
      filter(() => this.UpdateForm.valid),
      // concatMap(() => this.saveRecord(this.UpdateForm.value)),
      exhaustMap(() => this.saveRecord(this.UpdateForm.value))
    ).subscribe(data => {
      console.log('saved notification => ', data);
      this.submitted = false;
    });
  }

  saveRecord(formVal): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(
      `https://jsonplaceholder.typicode.com/posts`,
      JSON.stringify(formVal),
      httpOptions
    );
  }
}
