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
    // const url = this.API_PREFIX + '/users';
    // return <Observable<User[]>>this.http.get(url);

    const model: User[] = [{
      id:1,
      name: 'Johannes Kümmel',
      email:'johannes@ituk.ee',
      telegram:'jkymmel',
      admin:true,
      archived:false,
      isMentor:true,
      createdAt:'2017-08-29T03:01:17.000Z',
      updatedAt:'2017-08-31T07:25:35.000Z'},
      {
        id:2,
        name:'Lauri Kukk',
        email:'lauri.kukk1@gmail.com',
        telegram:'lakukk',
        admin:false,
        archived:false,
        isMentor:true,
        createdAt:'2017-08-29T00:03:32.000Z',
        updatedAt:'2018-08-23T08:59:38.000Z'},
      {
        id:5,
        name:'Alo Pullmann',
        email:'alo.pullmann@gmail.com',
        telegram:'Hydrasticus',
        admin:false,
        archived:false,
        isMentor:true,
        createdAt:'2017-08-29T15:10:37.000Z',
        updatedAt:'2017-09-28T23:26:55.000Z'}];
    return new Observable<User[]>((subscriber: Subscriber<User[]>) => subscriber.next(model));

  }

}
