import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {MentorProfileModel} from '../../shared/models/mentor-profile.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class MentorProfilesHttpService {

  constructor(private http: HttpClient) {
  }

  public getAllMentorProfiles(): Observable<MentorProfileModel[]> {
    const url = environment.API_URL + '/mentor';
    return this.http.get<MentorProfileModel[]>(url);
  }

  public updateMentorProfile(mentorProfile: MentorProfileModel): Observable<any> {
    const url = `${environment.API_URL}/mentor`;
    return this.http.put<MentorProfileModel>(url, {...mentorProfile, user: {id: mentorProfile.user.id}});
  }

  public getMentorProfilePic(mentorId): Observable<any> {
    const url = `${environment.API_URL}/mentor/${mentorId}/picture`;
    return this.http.get(url, {responseType: 'text'});
  }

  public findMentorByUserId(id: number): Observable<MentorProfileModel> {
    const url = `${environment.API_URL}/mentor/user/${id}`;
    return this.http.get<MentorProfileModel>(url);
  }

  public saveProfilePic(mentorId: number, formDataContainingImage: FormData): Observable<any> {
    // TODO make this work
    const requestHeaders = new HttpHeaders({'Content-Type': 'multipart/form-data'});
    const url = `${environment.API_URL}/mentor/${mentorId}/picture/`;
    return this.http.put<MentorProfileModel>(url, formDataContainingImage, {headers: requestHeaders});
  }

  public saveProfilePicBase64(mentorId: number, pic: string): Observable<any> {
    const url = `${environment.API_URL}/mentor/${mentorId}/picture/base64`;
    return this.http.put<MentorProfileModel>(url, pic);
  }
}
