import { createReducer, on } from '@ngrx/store';
import { load, finish } from './loading.actions';

export const initialState = false;

const _loadingReducer = createReducer(initialState,
  on(load, () => true),
  on(finish, () => false),
);

export function loadingReducer(state, action) {
  return _loadingReducer(state, action);
}
