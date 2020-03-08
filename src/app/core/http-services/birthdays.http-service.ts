import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class BirthdaysHttpService {

    constructor(private http: HttpClient) {
    }


    public getBirthdays(): Observable<string[]> {
        const url = environment.API_URL + '/user/birthdays';
        return this.http.get<string[]>(url);
    }
}
