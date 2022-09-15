import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../common/base.component';
import { Store } from '@ngrx/store';
import { addRxjsLog, RxjsState } from '../../common/rxjs.reducer';
import { SourceService } from '../../../service/source.service';
import { HttpClient } from '@angular/common/http';
import { map, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-p02-map',
  templateUrl: './p02-map.component.html',
  styleUrls: ['./p02-map.component.scss'],
})
export class P02MapComponent extends BaseComponent implements OnInit {

  counter = 1;

  emitter = new Subject<number>();

  constructor(private store: Store<RxjsState>, private sourceService: SourceService, private http: HttpClient) {
    super();
  }

  ngOnInit(): void {

    this.sourceService.queryAirports('b').subscribe((airports) => {
      console.log('airports', airports);
    });

    const sub =
    this.emitter.pipe(

    ).subscribe((val) => this.store.dispatch(addRxjsLog({ log: val + '' })));

    this.subscriptions.push(sub);
  }

  increment(): void {
    this.emitter.next(this.counter++);
  }

  newQuote(): void {
    this.sourceService.getPortalQuote().pipe(
      switchMap((quote) => this.sourceService.cowsay(quote)),
      map((cow) => `This is cow:\n${cow}`)
    ).subscribe((quote) => this.store.dispatch(addRxjsLog({ log: quote })));
  }

}
