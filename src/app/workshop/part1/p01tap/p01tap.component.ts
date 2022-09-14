import { Component, OnInit } from '@angular/core';
import { addRxjsLog, RxjsState } from '../../common/rxjs.reducer';
import { Store } from '@ngrx/store';
import { of, Subject, tap } from 'rxjs';
import { SourceService } from '../../../service/source.service';
import { BaseComponent } from '../../common/base.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-p01tap',
  templateUrl: './p01tap.component.html',
  styleUrls: ['./p01tap.component.scss'],
})
export class P01tapComponent extends BaseComponent implements OnInit {

  readonly exampleCode: string = 'emitter = new Subject<string>();\n\n' +
    'ngOnInit(): void {\n' +
    '  this.emitter.pipe(\n' +
    '    tap((log) => this.store.dispatch(addRxjsLog({ log })))\n' +
    '  ).subscribe();\n' +
    '}\n\n' +
    'emitLog() {\n' +
    '  this.emitter.next(\'Hello!\');\n' +
    '}';

  emitter = new Subject<string>();

  constructor(private store: Store<RxjsState>, private source: SourceService, private http: HttpClient) {
    super();
    // this.source.getPortalQuote().subscribe((quote) => this.store.dispatch(addRxjsLog({ log: quote })));
  }

  ngOnInit(): void {
    const sub =
    this.emitter.pipe(
      tap((log) => this.store.dispatch(addRxjsLog({ log })))
    ).subscribe();

    this.subscriptions.push(sub);

    const observable = this.http.get('https://portal.paulvandenburg.nl', { responseType: 'text' });
    observable.subscribe((s) => console.log('A', s));
    observable.subscribe((s) => console.log('B', s));
  }

  emitLog() {
    this.emitter.next('Hello!');
  }
}
