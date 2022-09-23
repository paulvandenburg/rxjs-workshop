import { Component, OnInit } from '@angular/core';
import { RxjsState, selectRxjsMessages } from '../rxjs.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { menu } from 'src/app/menu';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {

  menu = menu;

  messages$: Observable<string[]> | undefined;

  constructor(private store: Store<RxjsState>) {
  }

  ngOnInit(): void {
    this.messages$ = this.store.select(selectRxjsMessages);
  }

}
