import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../common/base.component';
import { Store } from '@ngrx/store';
import { addRxjsLog, RxjsState } from '../../common/rxjs.reducer';
import { SourceService } from '../../../service/source.service';
import { HttpClient } from '@angular/common/http';
import { Subject, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-p03-nested-map',
  templateUrl: './p03-nested-map.component.html',
})
export class P03NestedMapComponent extends BaseComponent implements OnInit {

  counter = 1;

  emitter = new Subject<number>();

  constructor(private store: Store<RxjsState>, private sourceService: SourceService, private http: HttpClient) {
    super();
  }

  ngOnInit(): void {
    const sub =
    this.emitter.pipe(
      // TODO compare results when using exhaustMap/mergeMap/concatMap
      switchMap((val) => this.sourceService.slow(`SwitchMap: ${val}`)),

      tap((log) => this.store.dispatch(addRxjsLog({ log })))
    ).subscribe();
    this.subscriptions.push(sub);
  }

  next(): void {
    this.store.dispatch(addRxjsLog({ log: `emitting: ${this.counter}` }));
    this.emitter.next(this.counter);
    this.counter++;
  }

  moo(): void {
    this.sourceService.getPortalQuote().pipe(
      switchMap((quote) => this.sourceService.cowsay(quote))
    ).subscribe((quote) => this.store.dispatch(addRxjsLog({ log: quote })));
  }

}
