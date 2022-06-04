import { Action } from '@ngrx/store';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import {User} from '../../models/user'


export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILUER = '[Auth] Login Failuer',
  SignUp = '[Auth] SignUp',
  SIGNUP_SUCCESS = '[Auth] Signup Success',
  SIGNUP_FAILUER = '[Auth] Signup Failuer',
  LogOut = '[Auth] LogOut',
  Products ='[Auth] Products',
  Products_Success = '[Auth] Product Success',
  Products_Fail = '[Auth] Product Fail'

}

export class Login implements Action {
    readonly type = AuthActionTypes.LOGIN;
    constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginFailuer implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILUER;
  constructor(public payload: any) {}
}

export class SignUp implements Action { 
  readonly type = AuthActionTypes.SignUp;
  constructor(public payload: User) {}
}

export class SIGNUP_SUCCESS implements Action {
  readonly type = AuthActionTypes.SIGNUP_SUCCESS;
  constructor(public payload: AnyCatcher) {}
}

export class SIGNUP_FAILUER implements Action {
  readonly type = AuthActionTypes.SIGNUP_FAILUER;
  constructor(public payload: any) {}
}


export class LogOut implements Action {
  readonly type = AuthActionTypes.LogOut;
}


export class Products implements Action {
  readonly type = AuthActionTypes.Products;
  constructor(public payload: any) {}
}


export class ProductsSuccess implements Action {
  readonly type = AuthActionTypes.Products_Success;
  constructor(public payload: any) {}
}


export class ProductsFail implements Action {
  readonly type = AuthActionTypes.Products_Fail;
  constructor(public payload: any) {}

}


export type All =
      Login
    | LoginSuccess
    | LoginFailuer
    | SignUp
    | SIGNUP_SUCCESS
    | SIGNUP_FAILUER
    | LogOut
    | Products 
    | ProductsSuccess
    | ProductsFail
  