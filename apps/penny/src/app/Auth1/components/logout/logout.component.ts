import { catchError } from 'rxjs/operators';
import { select } from '@ngrx/store';

import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as authaction from '../../../Auth1/store/actions/auth.action'
import { delay, Observable, timer } from 'rxjs';
import { State } from '../../store/reducers/auth.reducer';
import { AppState } from '../../store/auth.state';


@Component({
  selector: 'penny-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(private store: Store<AppState>) {
  }

  Product: Observable<State> 



  ngOnInit(): void {
    this.store.dispatch(new authaction.Products({}))
    const ons$ = timer(28000*1000)
    ons$.subscribe(() =>
    {    this.store.dispatch(new authaction.LogOut())
    })

  }

  logout(): void {
    this.store.dispatch(new authaction.LogOut())
  }

  GetData(): void {
    this.store.select<any>('authState').subscribe(state => {this.Product = state.user.message,console.log(this.Product)}

    )
  }
}
