import {Component} from '@angular/core';
import {User} from '../../models/user.model';
import {AuthContext} from '../../services/authContext';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})

export class SettingsComponent {

  public user: User;

  constructor(private authContext: AuthContext) {
    this.authContext.getSessionUser().subscribe(
      (response) => this.user = response,
      () => console.log('Error getting user by ID')
    );
  }

}
