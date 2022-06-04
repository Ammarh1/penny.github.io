import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';

import { environment } from './../../../api/src/environments/environment';
import { AppComponent } from './app.component';

import { AppRouteModule } from './app-route.module';
import { LoginComponent } from './Auth1/components/login/login.component';
import { SignUpComponent } from './Auth1/components/sign-up/sign-up.component';
import { StartingComponent } from './Auth1/components/starting/starting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthService1 } from './Auth1/service/auth.service';
import { AuthEffects } from './Auth1/store/effects/auth.effect';
import { AuthReducer } from './Auth1/store/reducers/auth.reducer';
import { LogoutComponent } from './Auth1/components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    LoginComponent,
    SignUpComponent,
    StartingComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    StoreModule.forRoot({authState:AuthReducer} as ActionReducerMap<any,any>),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: StartingComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignUpComponent },
      {path: 'loggedin', component: LogoutComponent},
      { path: '**', redirectTo: '/' },
    ]),
    EffectsModule.forRoot([AuthEffects]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService1],
  bootstrap: [AppComponent],
})
export class AppModule {}
