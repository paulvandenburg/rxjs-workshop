import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

export const routerFeatureKey = 'router';

export interface RouterState {
  router: fromRouter.RouterReducerState<any>;
}

export const selectRouter = createFeatureSelector<fromRouter.RouterReducerState<any>>(routerFeatureKey);

export const selectRouteState = createSelector(selectRouter, (router) => router?.state);
export const selectRouteParams = createSelector(selectRouteState, (state) => state?.params);
export const selectRouteParam = (param: string) => createSelector(selectRouteParams, (params) => params[param]);
export const selectRouteQueryParams = createSelector(selectRouteState, (state) => state.queryParams);
