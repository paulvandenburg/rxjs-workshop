import { on, ReducerTypes } from '@ngrx/store';
import { ActionCreator, ActionType, FunctionWithParametersType } from '@ngrx/store/src/models';
import { Draft, produce } from 'immer';

export const produceOn = <Type extends string, C extends FunctionWithParametersType<any, any>, State>(
  actionType: ActionCreator<Type, C>,
  callback: (draft: Draft<State>, action: ActionType<ActionCreator<Type, C>>) => any
): ReducerTypes<State, [ActionCreator<Type, C>]> =>
  // @ts-ignore
    on(actionType, (state: State, action): State => produce(state, (draft) => callback(draft, action)));
