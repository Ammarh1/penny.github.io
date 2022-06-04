import { LogOut } from './../../store/actions/auth.action';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'penny-starting',
  templateUrl: './starting.component.html',
  styleUrls: ['./starting.component.scss'],
})
export class StartingComponent implements OnInit {
  constructor(private store:Store) {}

  ngOnInit(): void {}

}
