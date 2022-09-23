import { Component } from '@angular/core';
import { BaseComponent } from '../../common/base.component';
import { Store } from '@ngrx/store';
import { addRxjsLog, RxjsState } from '../../common/rxjs.reducer';
import { SourceService } from '../../../service/source.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-p04-errors',
  templateUrl: './p04-errors.component.html',
})
export class P04ErrorsComponent extends BaseComponent {

  readonly code = 'this.sourceService.httpFox(500).pipe(\n' +
    '  catchError((error: HttpErrorResponse) => {\n' +
    '    console.log(\'Handling error\', error);\n' +
    '    return this.sourceService.blobToString(error.error);\n' +
    '  })\n' +
    ')';

  fox: string = '';
  status: string = '?';

  constructor(private store: Store<RxjsState>, private sourceService: SourceService, private http: HttpClient) {
    super();
  }

  click200() {
    this.sourceService.httpFox(200).subscribe((fox) => {
      this.status = '200 Ok';
      this.fox = fox;
    });
  }

  click400() {
    this.sourceService.httpFox(400).subscribe({
      next: (fox) => this.fox = fox,
      error: (error: HttpErrorResponse) => {
        this.status = `${error.status} ${error.statusText}`;
        console.log('400 error', error);
        this.fox = '';
        this.store.dispatch(addRxjsLog({ log: `Got error: ${error.status} ${error.statusText}` }));
      },
    });
  }

  click500() {
    this.sourceService.httpFox(500).subscribe({
      next: (fox) => this.fox = fox,
      error: (error: HttpErrorResponse) => {
        this.status = `${error.status} ${error.statusText}`;
        this.fox = '';
        console.log('500 error', error);
        this.store.dispatch(addRxjsLog({ log: `Got error: ${error.status} ${error.statusText}` }));
      },
    });
  }

  clickHandledError() {
    this.sourceService.httpFox(500).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('Handling error', error);
        return this.sourceService.blobToString(error.error);
      })
    ).subscribe({
      next: (fox) => {
        this.status = 'No error';
        this.fox = fox;
      },
      error: (error: HttpErrorResponse) => {
        this.status = `${error.status} ${error.statusText}`;
        this.fox = '';
        console.log('Handled error', error);
        this.store.dispatch(addRxjsLog({ log: `Got error: ${error.status} ${error.statusText}` }));
      },
    });
  }

}
