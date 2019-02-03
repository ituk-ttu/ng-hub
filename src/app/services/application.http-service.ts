import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ApplicationModel} from '../models/application.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApplicationHttpService {

  constructor(private http: HttpClient) {
  }

  public getAllApplications(): Observable<ApplicationModel[]> {
    const url = environment.API_URL + '/application';
    return <Observable<ApplicationModel[]>> this.http.get(url);
  }

}
