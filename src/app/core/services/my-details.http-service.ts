import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MentorProfileModel } from '../../shared/models/mentor-profile.model';
import { environment } from '../../../environments/environment';
import { AuthContext } from './authContext';
import { Session } from '../../shared/models/session.model';

@Injectable()
export class MyDetailsHttpService {

  constructor(private http: HttpClient,
              private authContext: AuthContext) {
  }

  public getMyMentorProfile(): Observable<MentorProfileModel> {
    const url = environment.API_URL + '/mentor/user/' + this.authContext.user.id;
    return this.http.get<MentorProfileModel>(url);
  }

  public saveMentorProfile(mentorProfile: MentorProfileModel): Observable<any> {
    const url = environment.API_URL + '/mentor/user/' + mentorProfile.id;
    return this.http.post<MentorProfileModel>(url, mentorProfile);
  }

  public saveProfilePic(pic: any): Observable<any> {
    const url = environment.API_URL + '/mentor/user/picture/';
    return this.http.post<MentorProfileModel>(url, pic);
  }

  public getSessions(): Observable<Session> {
    const url = `${environment.API_URL}/authenticate/sessions`;
    return this.http.get<Session>(url);
  }
}