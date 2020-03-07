import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MentorProfileModel } from '../../shared/models/mentor-profile.model';
import { environment } from '../../../environments/environment';
import { Session } from '../../shared/models/session.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyDetailsHttpService {

  constructor(private http: HttpClient) {
  }

  public updatePassword(id: number, password): Observable<MentorProfileModel> {
    const url = `${environment.API_URL}/user/${id}/new-password`;
    return this.http.put<MentorProfileModel>(url,
      { newPassword: password.newPassword, oldPassword: password.oldPassword });
  }

  public getSessions(): Observable<Session> {
    const url = `${environment.API_URL}/authenticate/sessions`;
    return this.http.get<Session>(url);
  }
}
