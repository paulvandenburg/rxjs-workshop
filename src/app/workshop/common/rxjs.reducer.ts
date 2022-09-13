import { Action, createAction, createFeatureSelector, createReducer, createSelector, props } from '@ngrx/store';
import { produceOn } from '../../ngrx/reducerUtils';
import { dateToIso8601Time } from '../../util';

export const rxjsFeatureKey = 'rxjs';

export interface RxjsState {
  messages: string[];
}

export const initialState: RxjsState = {
  messages: [],
};

export const addRxjsLog = createAction('[rxjs] Add log', props<{ log: string }>());
export const clearRxjsLog = createAction('[rxjs] Clear log');

export function rxjsReducer(state: RxjsState, actionCreator: Action) {
  return createReducer(
    initialState,
    produceOn(addRxjsLog, (draft, action) => {
      draft.messages = [
        `${dateToIso8601Time(new Date())} - ${action.log}`,
        ...draft.messages,
      ];
    }),
    produceOn(clearRxjsLog, (draft) => {
      draft.messages = [];
    })
  )(state, actionCreator);
}

export const selectFeature = createFeatureSelector<RxjsState>(rxjsFeatureKey);
export const selectRxjsMessages = createSelector(selectFeature, (state) => state?.messages || []);
