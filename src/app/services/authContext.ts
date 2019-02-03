import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {environment} from '../../environments/environment';
import {TokenModel} from '../models/token.model';
import {LoginDetails} from '../models/login-details.model';
import {Router} from '@angular/router';

@Injectable()
export class AuthContext {

  public user: User;

  constructor(private http: HttpClient,
              private router: Router) {
    this.getSessionUser().subscribe((response) => this.user = response);
  }

  public getSessionUser(): Observable<User> {
    const url = `${environment.API_URL}/user/me`;
    return this.http.get(url) as Observable<User>;
  }

  public getUserId() {
    return this.user.id;
  }

  public getName() {
    if (this.user) {
      return this.user.name;
    }
    return 'Undefined';
  }

  public logout(): void {
    const url = `${environment.API_URL}/authenticate/invalidate`;
    this.http.post(url, null).subscribe(
      () => this.router.navigate(['hub/auth']),
      () => this.router.navigate(['hub/auth']));
  }

  public login(details: LoginDetails): Observable<TokenModel> {
    const url = `${environment.API_URL}/authenticate/password`;
    return this.http.post(url, details) as Observable<TokenModel>;
  }

}
