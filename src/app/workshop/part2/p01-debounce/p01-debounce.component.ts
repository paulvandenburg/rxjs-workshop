import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addRxjsLog, RxjsState } from '../../common/rxjs.reducer';
import { SourceService } from '../../../service/source.service';
import { BaseComponent } from '../../common/base.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EMPTY, map, Observable, switchMap, tap } from 'rxjs';
import { Airport } from '../../../service/airport';
import { Page } from '../../../service/page';

@Component({
  selector: 'app-p01-debounce',
  templateUrl: './p01-debounce.component.html',
})
export class P01DebounceComponent extends BaseComponent implements OnInit {

  searchForm: FormGroup;

  airportPage$: Observable<Page<Airport>> | undefined;

  constructor(private store: Store<RxjsState>, private sourceService: SourceService, private formBuilder: FormBuilder) {
    super();

    this.searchForm = this.formBuilder.group({
      name: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.airportPage$ =
    this.searchForm.get('name')?.valueChanges.pipe(
      tap((searchValue) => this.store.dispatch(addRxjsLog({ log: searchValue }))),

      // TODO reduce amount of calls

      switchMap((query) => this.sourceService.queryAirports(query))
    );
  }

  get airports(): Observable<Airport[]> {
    return this.airportPage$?.pipe(
      map((page) => page.items)
    ) || EMPTY;
  }

}
