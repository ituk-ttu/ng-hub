import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MentorProfileModel } from '../models/mentor-profile.model';
import { environment } from '../../environments/environment';

@Injectable()
export class MentorProfilesHttpService {

  constructor(private http: HttpClient) {
  }

  public getMentorProfiles(): Observable<MentorProfileModel[]> {
    const url = environment.API_URL + '/mentor';
    return this.http.get<MentorProfileModel[]>(url);
  }

}
