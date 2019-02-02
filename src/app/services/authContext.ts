import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscriber} from 'rxjs';
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
    // const url = `${environment.API_URL}/user/me`;
    // return <Observable<User>> this.http.get(url, null);
    const model: User = {
      id: 2,
      name: 'Stiiven Stiigal',
      email: 'ststi@taltech.ee',
      admin: false,
      archived: false,
      updatedAt: '2017-08-29',
      createdAt: '2017-09-28',
      telegram: 'bangarang',
      isMentor: true
    };
    return new Observable<User>((subscriber: Subscriber<User>) => subscriber.next(model));
  }

  public getUserId() {
    return this.user.id;
  }

  public getName() {
    return this.user.name;
  }

  public logout(): void {
    const url = `${environment.API_URL}/authenticate/invalidate`;
    this.http.post(url, null).subscribe(
      () => this.router.navigate(['hub/auth']),
      () => this.router.navigate(['hub/auth']));
  }

  public login(details: LoginDetails): Observable<TokenModel> {
    const url = `${environment.API_URL}/authenticate/password`;
    return <Observable<TokenModel>> this.http.post(url, details);
  }

}
