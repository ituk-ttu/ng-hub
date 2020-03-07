import {Component, OnInit} from '@angular/core';
import {User} from '../../../shared/models/user.model';
import {AuthContext} from '../../../core/services/authContext';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})

export class SettingsComponent implements OnInit {

  public user: User = {} as User;

  constructor(public authContext: AuthContext,
  ) {
  }

  ngOnInit(): void {
    this.user = { ...this.authContext.user };
  }

}
