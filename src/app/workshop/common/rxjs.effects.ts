import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { map } from 'rxjs';
import { clearRxjsLog } from './rxjs.reducer';

@Injectable()
export class RxjsEffects {
  cleanLogOnNavigate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(routerNavigatedAction),
      map(() => clearRxjsLog())
    )
  );

  constructor(private actions$: Actions) {}
}
