import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscriber} from 'rxjs';
import {MentorProfileModel} from '../models/mentor-profile.model';
import {environment} from '../../environments/environment';

@Injectable()
export class MyDetailsHttpService {

  constructor(private http: HttpClient) {
  }

  public getMyMentorProfile(): Observable<MentorProfileModel> {
    const url = environment.API_URL + '/mentor/user/63';
    return <Observable<MentorProfileModel>> this.http.get(url);
  }

  public saveMentorProfile(mentorProfile: MentorProfileModel): Observable<any> {
    const url = environment.API_URL + '/mentor/user/' + mentorProfile.id;
    return <Observable<any>> this.http.post(url, mentorProfile) as Observable<MentorProfileModel>;
  }

  public saveProfilePic(pic: any): Observable<any> {
    const url = environment.API_URL + '/mentor/user/picture/';
    return <Observable<any>> this.http.post(url, pic) as Observable<MentorProfileModel>;
  }
}
