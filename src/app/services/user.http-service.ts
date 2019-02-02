import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable()
export class UserHttpService {

    private API_PREFIX = 'https://ituk.ee';

    constructor(private http: HttpClient) { }

    public getAllUsers(): Observable<User[]> {
        // TODO mock this till api running
        // getUsers is a lazy method. In order to get the actual users subscribe to it. See usages for example
        const url = this.API_PREFIX + '/users';
        return <Observable<User[]>>this.http.get(url);
    }
}
