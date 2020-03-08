import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import { UserBirthdays } from '../../shared/models/user-birthdays.model';

@Injectable()
export class BirthdaysHttpService {

    constructor(private http: HttpClient) {
    }


    public getBirthdays(): Observable<UserBirthdays[]> {
        const url = environment.API_URL + '/user/birthdays';
        return this.http.get<UserBirthdays[]>(url);
    }
}
