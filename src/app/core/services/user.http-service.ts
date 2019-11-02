import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { User } from '../../shared/models/user.model';
import { environment } from '../../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable()
export class UserHttpService {

  constructor(private http: HttpClient) {
  }

  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

  public getAllUsers(): Observable<User[]> {
    const url = environment.API_URL + '/user';
    return this.http.get<User[]>(url);
  }

  public getUserById(userId: string): Observable<User> {
    const url = environment.API_URL + `/user/${userId}`;
    return this.http.get<User>(url);
  }

  public putUser(user: User): Observable<User> {
    const url = environment.API_URL + `/user/${user.id}`;
    return this.http.put<User>(url, user).pipe(catchError(UserHttpService.handleError));
  }
}
