import { Component, OnInit } from '@angular/core';
import { addRxjsLog, RxjsState } from '../../ngrx/rxjs.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-p01tap',
  templateUrl: './p01tap.component.html',
  styleUrls: ['./p01tap.component.scss'],
})
export class P01tapComponent implements OnInit {

  html = '<html>\n' +
    ' <body>\n' +
    '   <a href="#">linkje</a>\n' +
    ' </body>\n' +
    '</html>';

  constructor(private store: Store<RxjsState>) { }

  ngOnInit(): void {
  }

  addLog() {
    this.store.dispatch(addRxjsLog({ log: 'hello' }));
  }
}
