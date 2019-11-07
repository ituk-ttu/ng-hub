import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthContext } from '../services/authContext';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authContext: AuthContext) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authContext.isLoggedIn) {
      return true;
    }
    return this.authContext.isLoggedInSubject
      .pipe(map(value => {
        if (!value) {
          localStorage.removeItem('token');
          this.router.navigate(['hub/auth']);
          return value;
        }
        return value;
      }));
  }
}
