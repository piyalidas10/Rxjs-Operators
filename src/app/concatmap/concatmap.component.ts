import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { concatMap, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {
  UpdateForm: FormGroup;
  submitted = false;
  editData = {
    name: 'test',
    salary: '123',
    age: '23',
  };

  constructor(private http: HttpClient) {
    this.UpdateForm = new FormGroup({
      name: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.UpdateForm.setValue(this.editData);
  }

  onSubmit(): void {
    this.submitted = true;

    /* Normal method */
    // this.UpdateForm.valueChanges.pipe(
    //   filter(() => this.UpdateForm.valid)
    // ).subscribe(changes => {
    //   this.updateRecord(changes).subscribe((data => console.log('update notification => ', data)));
    // });

    /*
      concatMap operator is mostly used when you need to map a plain value to an observable.
    */
    this.UpdateForm.valueChanges.pipe(
      filter(() => this.UpdateForm.valid),
      concatMap((changes) => this.updateRecord(changes))
    ).subscribe(data => {
      console.log('update notification => ', data);
    });
  }

  updateRecord(changes): Observable<any> {
    const id = 25;
    return this.http.put(
      `https://dummy.restapiexample.com/public/api/v1/update/${id}`,
      JSON.stringify(changes)
    );
  }

}
