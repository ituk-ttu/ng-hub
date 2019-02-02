import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscriber} from 'rxjs';
import {MentorProfileModel} from '../models/mentor-profile.model';

@Injectable()
export class MentorProfilesHttpService {

    // TODO remove to configuration file
    private API_PREFIX = 'https://ituk.ee';

    constructor(private http: HttpClient) { }

    public getMentorProfiles(): Observable<MentorProfileModel[]> {
        // TODO mock this till api running
        // getMentorProfiles is a lazy method. In order to get the actual users subscribe to it. See usages for example
        // const url = this.API_PREFIX + '/mentor/user/63';
        // return <Observable<MentorProfileModel[]>> this.http.get(url);
        const model1: MentorProfileModel = {
            curriculum: 'Informaatika',
            enabled: true,
            gif: 'http://78.media.tumblr.com/72f0a33d91b3d66f8ef09e7e2ce31c82/tumblr_nx7gsiLvw81uph9ivo1_250.gif',
            id: 24,
            mentorship: 'Sita Ratas',
            mentorshipId: 43,
            photo: '/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQ',
            quote: '\'Sõitsime auto jumala kuubikuks\' -Nils',
            text: 'Olen Riigikogus riigi kodus. Teen poliitikat.'
        };
        const model2: MentorProfileModel = {
            curriculum: 'Äriinfotehnoloogia',
            enabled: true,
            gif: 'http://78.media.tumblr.com/72f0a33d91b3d66f8ef09e7e2ce31c82/tumblr_nx7gsiLvw81uph9ivo1_250.gif',
            id: 45,
            mentorship: 'Bolin Kont',
            mentorshipId: 22,
            photo: '/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQ',
            quote: '\'Sõitsime auto jumala kuubikuks\' -Nils',
            text: 'Taltsutan maad ja laavat, situn vabal ajal verd. Mis toimps?'
        };
        const model3: MentorProfileModel = {
            curriculum: 'IT-süsteemide arendus',
            enabled: true,
            gif: 'http://78.media.tumblr.com/72f0a33d91b3d66f8ef09e7e2ce31c82/tumblr_nx7gsiLvw81uph9ivo1_250.gif',
            id: 31,
            mentorship: 'Yami Yugi',
            mentorshipId: 12,
            photo: '/9j/4AAQSkZJRgA BAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQ',
            quote: '\'Sõitsime auto jumala kuubikuks\' -Nils',
            text: 'IT\'S TIME TO DU-DU-DU-DU D-D-D-D-DUEL!'
        };
        const model4: MentorProfileModel = {
            curriculum: 'Küberkübetaja',
            enabled: true,
            gif: 'http://78.media.tumblr.com/72f0a33d91b3d66f8ef09e7e2ce31c82/tumblr_nx7gsiLvw81uph9ivo1_250.gif',
            id: 1,
            mentorship: 'Seto Kaiba',
            mentorshipId: 31,
            photo: '/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQ',
            quote: '\'Sõitsime auto jumala kuubikuks\' -Nils',
            text: 'Yugi on jobu.'
        };

        return new Observable<MentorProfileModel[]>((subscriber: Subscriber<MentorProfileModel[]>) =>
            subscriber.next([model1, model2, model3, model4]));
    }
}
