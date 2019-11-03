import { Component } from '@angular/core';
import { AuthContext } from '../../../core/services/authContext';
import { LoginDetails } from '../../../shared/models/login-details.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})

export class AuthComponent {

  private loginDetails: LoginDetails = {} as LoginDetails;

  constructor(private authContext: AuthContext,
              private router: Router) {
  }

  login() {
    this.authContext.login(this.loginDetails)
      .subscribe((token) => {
          localStorage.setItem('token', token.token);
          this.authContext.refreshSession();
          this.router.navigate(['hub']);
        },
        () => alert('Wrong password'));
  }

}
