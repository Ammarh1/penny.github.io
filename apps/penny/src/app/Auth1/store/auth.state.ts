import { ActionReducerMap } from '@ngrx/store';
import * as auth from './reducers/auth.reducer'

export interface AppState {
    authState: auth.State
}


export const reducers: ActionReducerMap<AppState,any> = {
    authState: auth.AuthReducer
};

  