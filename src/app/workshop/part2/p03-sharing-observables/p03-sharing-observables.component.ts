import { Component, OnInit } from '@angular/core';
import { map, Subject, switchMap, tap } from 'rxjs';
import { BaseComponent } from '../../common/base.component';
import { Store } from '@ngrx/store';
import { addRxjsLog, RxjsState } from '../../common/rxjs.reducer';
import { SourceService } from '../../../service/source.service';

@Component({
  selector: 'app-p03-sharing-observables',
  templateUrl: './p03-sharing-observables.component.html',
})
export class P03SharingObservablesComponent extends BaseComponent implements OnInit {

  counter = 1;

  emitter = new Subject<number>();

  constructor(private store: Store<RxjsState>, private sourceService: SourceService) {
    super();
  }

  ngOnInit(): void {
    // Quote source
    const source = this.emitter.pipe(
      switchMap((i) => this.sourceService.getPortalQuote().pipe(
        map((quote) => `#${i} - ${quote}`)
      ))
    );

    // Visual A
    this.subscriptions.push(
      source.pipe(
        map((i) => `A: ${i}`),
        tap((log) => this.store.dispatch(addRxjsLog({ log })))
      ).subscribe()
    );
    // Visual B
    this.subscriptions.push(
      source.pipe(
        map((i) => `B: ${i}`),
        tap((log) => this.store.dispatch(addRxjsLog({ log })))
      ).subscribe()
    );
  }

  increment(): void {
    this.emitter.next(this.counter++);
  }
}
