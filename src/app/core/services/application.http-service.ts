import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApplicationModel } from '../../shared/models/application.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApplicationHttpService {

  constructor(private http: HttpClient) {
  }

  public getAllApplications() {
    const url = environment.API_URL + '/application';
    return this.http.get(url);
  }

}
