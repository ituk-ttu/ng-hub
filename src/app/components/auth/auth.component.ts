import {Component, OnInit} from '@angular/core';
import {AuthContext} from '../../services/authContext';
import {LoginDetails} from '../../models/login-details.model';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  private loginDetails: LoginDetails = {} as LoginDetails;


  constructor(private authContext: AuthContext,
              private router: Router,
              private cookieService: CookieService) {
  }

  ngOnInit() {
  }

  login() {
    this.authContext.login(this.loginDetails).subscribe((token) => {
      this.authContext.refreshSession();
      this.cookieService.put('token', token.token);
      this.router.navigate(['hub']);
    },
      () => alert('Wrong password'));
  }

}
