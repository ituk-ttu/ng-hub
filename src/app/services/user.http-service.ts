import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {environment} from '../../environments/environment';

@Injectable()
export class UserHttpService {

    constructor(private http: HttpClient) { }

    public getAllUsers(): Observable<User[]> {
        const url = environment.API_URL + '/user';
        return <Observable<User[]>>this.http.get(url);
    }

    public getUserById(userId: string): Observable<User> {
        const url = environment.API_URL + `/user/${userId}`;
        return <Observable<User>>this.http.get(url);
    }

}
