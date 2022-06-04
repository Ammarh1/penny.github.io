import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import {User} from '../../models/user'
import * as authaction from '../../../Auth1/store/actions/auth.action'
import { AppState } from '../../store/auth.state';

@Component({
  selector: 'penny-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  user: User = new User()


  constructor(private store:Store<AppState>) {}

  ngOnInit(): void {}

  onSubmit(): void {
        
    console.log ("component", this.user)
    this.store.dispatch(new authaction.SignUp(this.user))


  }
}
