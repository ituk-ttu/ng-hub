import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { GeneralMeeting } from '../../shared/models/general-meeting.model';
import { Observable } from "rxjs";

@Injectable()
export class GeneralMeetingsHttpService {

  constructor(private http: HttpClient) {
  }

  public getAllMeetings(): Observable<GeneralMeeting[]> {
    const url = environment.API_URL + '/meeting';
    return this.http.get<GeneralMeeting[]>(url);
  }

  public createMeeting(generalMeeting: GeneralMeeting): Observable<GeneralMeeting> {
    const url = environment.API_URL + '/meeting';
    return this.http.post<GeneralMeeting>(url, generalMeeting);
  }

  public updateMeeting(generalMeeting: GeneralMeeting, meetingId: string): Observable<GeneralMeeting> {
    const url = `${environment.API_URL}/meeting/${meetingId}`;
    return this.http.put<GeneralMeeting>(url, generalMeeting);
  }

}
