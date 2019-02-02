import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subscriber} from 'rxjs';
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

    public getUserById(id: string): Observable<User> {
        // TODO mock this till api running
        const model: User = {
            id: 2,
            name: 'Stiiven Stiigal',
            email: 'ststi@taltech.ee',
            admin: false,
            archived: false,
            updatedAt: '2017-08-29',
            createdAt: '2017-09-28',
            telegram: 'bangarang'
        };

        return new Observable<User>((subscriber: Subscriber<User>) => subscriber.next(model));

        //TODO: this is the real thing
        //const url = `${this.API_PREFIX}/user/${id}`;
        //return <Observable<User>>this.http.get(url);
    }

}
