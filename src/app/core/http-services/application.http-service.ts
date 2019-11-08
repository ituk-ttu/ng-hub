import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ApplicationModel } from '../../shared/models/application.model';
import { Observable } from 'rxjs';

@Injectable()
export class ApplicationHttpService {

  constructor(private http: HttpClient) {
  }

  public getAllApplications(): Observable<ApplicationModel[]> {
    const url = environment.API_URL + '/application';
    return this.http.get<ApplicationModel[]>(url);
  }

  public getApplicationById(id: number): Observable<ApplicationModel> {
    const url = `${environment.API_URL}/application/${id}`;
    return this.http.get<ApplicationModel>(url);
  }

}
