import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../common/base.component';
import { Store } from '@ngrx/store';
import { RxjsState } from '../../common/rxjs.reducer';
import { SourceService } from '../../../service/source.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-p03-nested-map',
  templateUrl: './p03-nested-map.component.html',
  styleUrls: ['./p03-nested-map.component.scss'],
})
export class P03NestedMapComponent extends BaseComponent implements OnInit {

  constructor(private store: Store<RxjsState>, private sourceService: SourceService, private http: HttpClient) {
    super();
  }

  ngOnInit(): void {
  }

}
