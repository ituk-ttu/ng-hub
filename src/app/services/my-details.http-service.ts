import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscriber} from 'rxjs';
import {MentorProfileModel} from '../models/mentor-profile.model';

@Injectable()
export class MyDetailsHttpService {

  // TODO remove to configuration file
  private API_PREFIX = 'https://ituk.ee';

  constructor(private http: HttpClient) {
  }

  public getMyMentorProfile(): Observable<MentorProfileModel> {
    // TODO mock this till api running
    // getMyMentorProfile is a lazy method. In order to get the actual users subscribe to it. See usages for example
    // const url = this.API_PREFIX + '/mentor/user/63';
    // return <Observable<MentorProfileModel[]>> this.http.get(url);
    const modal: MentorProfileModel = {
      curriculum: 'Informaatika',
      enabled: false,
      gif: 'http://78.media.tumblr.com/72f0a33d91b3d66f8ef09e7e2ce31c82/tumblr_nx7gsiLvw81uph9ivo1_250.gif',
      id: 25,
      mentorshipId: 63,
      photo: '/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQ',
      quote: '\'Sõitsime auto jumala kuubikuks\' -Nils',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
      name: 'Angular hub'
    };
    return new Observable<MentorProfileModel>((subscriber: Subscriber<MentorProfileModel>) =>
      subscriber.next(modal));
  }

  public saveMentorProfile(mentorProfile: MentorProfileModel): Observable<MentorProfileModel> {
    // TODO mock this till api running
    // getUsers is a lazy method. In order to get the actual users subscribe to it. See usages for example
    const url = this.API_PREFIX + '/mentor/user/63';
    return <Observable<MentorProfileModel>> this.http.post(url, mentorProfile);

  }


}
