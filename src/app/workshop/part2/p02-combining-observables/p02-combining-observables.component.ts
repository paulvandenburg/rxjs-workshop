import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../common/base.component';
import { Store } from '@ngrx/store';
import { RxjsState } from '../../common/rxjs.reducer';
import { SourceService } from '../../../service/source.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-p02-combining-observables',
  templateUrl: './p02-combining-observables.component.html',
})
export class P02CombiningObservablesComponent extends BaseComponent implements OnInit {

  counter = 1;
  emitterA = new Subject<number>();
  emitterB = new Subject<string>();

  constructor(private store: Store<RxjsState>, private sourceService: SourceService) {
    super();
  }

  ngOnInit(): void {
    // TODO react to events of both A and B in 1 pipe.
  }

  nextA(): void {
    this.emitterA.next(this.counter++);
  }

  nextB(): void {
    this.emitterB.next(`We counted to ${this.counter++}!`);
  }
}
