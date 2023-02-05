import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, takeUntil } from 'rxjs/operators';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('txtField', {static: true}) txtField: ElementRef;
  searchSubcription: Subscription;
  private unsubscribe$ = new Subject<string>();
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getSearchValue();
  }

  getSearchValue(): void {
    this.searchSubcription = fromEvent<any>(this.txtField.nativeElement, 'input')
    .pipe(
      // Time in milliseconds between key events
      debounceTime(1000),
      map(event => event.target.value),
      distinctUntilChanged(),
      switchMap(val => this.apiService.getUsersByLocation(val)),
      takeUntil(this.unsubscribe$)
    )
    .subscribe(data => {
      console.log(data);
      console.log('data is collected');
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next('unsubscribe emit');
    this.unsubscribe$.complete();
    console.log('component destroyed');
  }

}
