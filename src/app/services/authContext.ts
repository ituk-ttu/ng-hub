import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { TokenModel } from '../models/token.model';
import { LoginDetails } from '../models/login-details.model';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class AuthContext {

  public user: User;
  public isLoggedIn = false;
  public isLoggedInSubject = new Subject<boolean>();

  constructor(private http: HttpClient,
              private router: Router,
              private cookieService: CookieService) {
    this.refreshSession();
  }

  public getSessionUser(): Observable<User> {
    const url = `${environment.API_URL}/user/me`;
    return this.http.get<User>(url);
  }

  public refreshSession() {
    this.getSessionUser().subscribe((response) => {
        this.isLoggedInSubject.next(true);
        this.isLoggedIn = true;
        this.user = response;
      }
    );
  }

  public logout(): void {
    this.cookieService.remove('token');
    const url = `${environment.API_URL}/authenticate/invalidate`;
    this.http.post(url, null).subscribe(
      () => this.router.navigate(['hub/auth']),
      () => this.router.navigate(['hub/auth']));
  }

  public login(details: LoginDetails): Observable<TokenModel> {
    const url = `${environment.API_URL}/authenticate/password`;
    return this.http.post<TokenModel>(url, details);
  }

}
