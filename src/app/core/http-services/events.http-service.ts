import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class EventsHttpService {

    constructor(private http: HttpClient) {
    }

    public getAllEvents(calenderId: string, googleCalenderApiKey: string): Observable<any[]> {
        const url = `https://content.googleapis.com/calendar/v3/calendars/${calenderId}events`;
        let params = new HttpParams();
        params = params.append('maxResults', '9');
        params = params.append('orderBy', 'startTime');
        params = params.append('singleEvents', 'true');
        params = params.append('timeMin', new Date(Date.now()).toISOString());
        params = params.append('key', googleCalenderApiKey);
        return this.http.get<any[]>(url, { params });
    }


}
