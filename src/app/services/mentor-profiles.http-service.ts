import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscriber} from 'rxjs';
import {MentorProfileModel} from '../models/mentor-profile.model';
import {environment} from '../../environments/environment';
import {AuthContext} from './authContext';

@Injectable()
export class MentorProfilesHttpService {

  constructor(private http: HttpClient,
              private authContext: AuthContext) {
  }

  public getMentorProfiles(): Observable<MentorProfileModel[]> {
    const url = environment.API_URL + '/mentor';
    return <Observable<MentorProfileModel[]>> this.http.get(url);
  }

}
