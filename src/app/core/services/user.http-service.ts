import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserHttpService {

  constructor(private http: HttpClient) {
  }

  public getAllUsers(): Observable<User[]> {
    const url = environment.API_URL + '/user';
    return this.http.get<User[]>(url);
  }

  public getUserById(userId: string): Observable<User> {
    const url = environment.API_URL + `/user/${userId}`;
    return this.http.get<User>(url);
  }

}
