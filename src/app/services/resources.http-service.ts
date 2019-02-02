import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscriber} from 'rxjs';
import {ResourcesContentModel} from "../models/resources-content.model";

@Injectable()
export class ResourcesHttpService {

    // TODO remove to configuration file
    private API_PREFIX = 'https://ituk.ee';

    constructor(private http: HttpClient) { }

    public getResources(): Observable<ResourcesContentModel[]> {
        // TODO mock this till api running
        // getResources is a lazy method. In order to get the actual users subscribe to it. See usages for example
        // const url = this.API_PREFIX + '/mentor/user/63';
        // return <Observable<MentorProfileModel[]>> this.http.get(url);
        const model1: ResourcesContentModel = {
            authorId: 1,
            comment: 'Mingi pask leht lul',
            createdAt: '2018-09-09',
            id: 1,
            name: 'ITÜKi Hub',
            updatedAt: '2018-09-10',
            url: 'https://hub.ituk.ee'
        };
        const model2: ResourcesContentModel = {
            authorId: 2,
            comment: 'Alumine content testib tühja commenti',
            createdAt: '2018-09-09',
            id: 2,
            name: 'TalTech e-Sport',
            updatedAt: '2018-09-10',
            url: 'https://www.e-sport.ee'
        };
        const model3: ResourcesContentModel = {
            authorId: 3,
            comment: '',
            createdAt: '2018-09-09',
            id: 3,
            name: 'e-Spordi Facebook',
            updatedAt: '2018-09-10',
            url: 'https://www.facebook.com/taltech.esport'
        };

        return new Observable<ResourcesContentModel[]>((subscriber: Subscriber<ResourcesContentModel[]>) =>
            subscriber.next([model1, model2, model3]));
    }
}
