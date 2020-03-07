import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { GeneralMeeting } from '../../shared/models/general-meeting.model';
import { Observable } from "rxjs";
import {GeneralMeetingParticipation} from "../../shared/models/general-meeting-participation.model";

@Injectable()
export class GeneralMeetingsHttpService {

  constructor(private http: HttpClient) {
  }

  public getAllMeetings(): Observable<GeneralMeeting[]> {
    const url = environment.API_URL + '/meeting';
    return this.http.get<GeneralMeeting[]>(url);
  }

  public getMeeting(meetingId: string): Observable<GeneralMeeting> {
    const url = `${environment.API_URL}/meeting/${meetingId}`;
    return this.http.get<GeneralMeeting>(url);
  }

  public createMeeting(generalMeeting: GeneralMeeting): Observable<GeneralMeeting> {
    const url = environment.API_URL + '/meeting';
    return this.http.post<GeneralMeeting>(url, generalMeeting);
  }

  public updateMeeting(generalMeeting: GeneralMeeting, meetingId: string): Observable<GeneralMeeting> {
    const url = `${environment.API_URL}/meeting/${meetingId}`;
    return this.http.put<GeneralMeeting>(url, generalMeeting);
  }

  public updateParticipations(participations: GeneralMeetingParticipation[]): Observable<GeneralMeetingParticipation[]> {
    const url = `${environment.API_URL}/meeting/participation`;
    return this.http.put<GeneralMeetingParticipation[]>(url, participations);
  }

  public getParticipations(meetingId: string): Observable<GeneralMeetingParticipation[]> {
    const url = `${environment.API_URL}/meeting/participation/${meetingId}/all`;
    return this.http.get<GeneralMeetingParticipation[]>(url);
  }

}
