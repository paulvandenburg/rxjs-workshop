import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}

export const reducers: ActionReducerMap<RootState> = {};

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
