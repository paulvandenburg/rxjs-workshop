import { Component, OnInit } from '@angular/core';
import { addRxjsLog, RxjsState } from '../../common/rxjs.reducer';
import { Store } from '@ngrx/store';
import { Subject, tap } from 'rxjs';
import { SourceService } from '../../../service/source.service';
import { BaseComponent } from '../../common/base.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-p01-tap',
  templateUrl: './p01-tap.component.html',
})
export class P01TapComponent extends BaseComponent implements OnInit {

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

  constructor(private store: Store<RxjsState>, private sourceService: SourceService, private http: HttpClient) {
    super();
  }

  ngOnInit(): void {
    const sub =
    this.emitter.pipe(
      tap((log) => this.store.dispatch(addRxjsLog({ log })))
    ).subscribe();

    this.subscriptions.push(sub);
  }

  emitLog() {
    this.emitter.next('Hello!');
  }
}
