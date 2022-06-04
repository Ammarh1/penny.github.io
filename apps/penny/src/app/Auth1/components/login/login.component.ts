import { select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {User} from '../../models/user'
import * as authAction from '../../store/actions/auth.action'
import { Observable } from 'rxjs';
import { AppState } from '../../store/auth.state';
import { State } from '../../store/reducers/auth.reducer';

@Component({
  selector: 'penny-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = new User()
  users$: Observable<State> 
  

  constructor(
    private store:Store<AppState>,
  ) {
  }

  
  ngOnInit(): void {
    
  }

  onSubmit(): void {
    const payload ={
      email: this.user.email,
      password:this.user.password
    }

    console.log ("component", payload)
    console.log(this.users$)

    this.store.dispatch(new authAction.Login(payload))

    this.store.select<any>('authState').subscribe(state => this.users$ = state.errorMessage)
    
    console.log(this.users$)


  }
}
