import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApplicationHttpService {

  constructor(private http: HttpClient) {
  }

  public getAllApplications() {
    const url = environment.API_URL + '/application';
    return this.http.get(url);
  }

}
