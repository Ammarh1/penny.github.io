import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect} from '@ngrx/effects';
import { tap,catchError } from 'rxjs/operators';


import { map, Observable,of,switchMap } from 'rxjs';


import { AuthService1 } from '../../service/auth.service';
import { SIGNUP_SUCCESS, LoginFailuer, SIGNUP_FAILUER, Products, AuthActionTypes, LoginSuccess, ProductsSuccess, ProductsFail} from './../actions/auth.action';


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService1,
    private router: Router,
  ) {}


  @Effect() 
    Login: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    switchMap((data: any) =>this.authService.Login(data.payload.email,data.payload.password).pipe(
      map(res => new LoginSuccess(res)),
      catchError((Res) => of(new LoginFailuer(Res.error.message)))
      
    )))
    

    @Effect({ dispatch: false })
    LoginSuccess$: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user: any) => {
    console.log("login success" , user)
    this.router.navigateByUrl('/loggedin');
    map(() => new Products({}))}))

    @Effect({ dispatch: false })
    Loginfailuer$: Observable<any> = this.actions$.pipe(
        ofType(AuthActionTypes.LOGIN_FAILUER),
        //tap((user: any) => {console.log(user.payload)})
    )

    @Effect()
    SignUp: Observable<any> = this.actions$.pipe (
      ofType(AuthActionTypes.SignUp),
      switchMap((data: any) => this.authService.SignUp(data.payload.name,data.payload.email,data.payload.password).pipe(
        map(res => new SIGNUP_SUCCESS(res)),
        catchError((res) => of(new SIGNUP_FAILUER(res)))
      )))

    @Effect({ dispatch: false })
    SignUpSuccess$: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.SIGNUP_SUCCESS),
    tap((user: any) => {
    this.router.navigateByUrl('/login');
    }))

    @Effect({ dispatch: false })
    SignupFailuer$: Observable<any> = this.actions$.pipe(
        ofType(AuthActionTypes.SIGNUP_FAILUER),
    //    tap((user: any) => {console.log("SIGNUP_FAILUER", user)})
    )

    @Effect() 
    Product: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.Products),
    switchMap(() =>this.authService.Products().pipe(
      map(res => new ProductsSuccess(res)),
      catchError((err) => of (new ProductsFail(err)))) 
    ))

      @Effect({ dispatch: false })
      ProductSuccess$: Observable<any> = this.actions$.pipe(
      ofType(AuthActionTypes.Products_Success),
     // tap((user: any) => {console.log("prosucts" , user)})
      )  
      
      @Effect({ dispatch: false })
      ProductFaliuer$: Observable<any> = this.actions$.pipe(
        ofType(AuthActionTypes.LOGIN_FAILUER),
    )



    @Effect({dispatch: false})
    LogOut: Observable<any> = this.actions$.pipe (
      ofType(AuthActionTypes.LogOut),
      switchMap(() => this.authService.Logout().pipe(
        map((res) => {
        //console.log("the response logout",res),
        this.router.navigateByUrl('/');
      }))
        
))
      
    
}

