import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthContext } from '../services/authContext';

@Injectable({
  providedIn: 'root'
})
export class CanAccessMentorGuard implements CanActivate {

  constructor(private router: Router, private authContext: AuthContext) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authContext.user.role === 'BOARD'
        || this.authContext.user.role === 'ADMIN'
        || !!this.authContext.user.mentor;
  }
}
