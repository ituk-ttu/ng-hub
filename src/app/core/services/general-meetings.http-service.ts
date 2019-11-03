import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TokenModel } from '../../shared/models/token.model';
import { GeneralMeeting } from '../../shared/models/general-meeting.model';

@Injectable()
export class GeneralMeetingsHttpService {

  constructor(private http: HttpClient) {
  }

  public getAllMeetings() {
    const url = environment.API_URL + '/meeting';
    return this.http.get(url);
  }

  public createMeeting(generalMeeting: GeneralMeeting) {
    const url = environment.API_URL + '/meeting';
    return this.http.post<TokenModel>(url, generalMeeting);
  }

  public updateMeeting(generalMeeting: GeneralMeeting, meetingId: string) {
    const url = `${environment.API_URL}/meeting/${meetingId}` ;
    return this.http.put<TokenModel>(url, generalMeeting);
  }

}
