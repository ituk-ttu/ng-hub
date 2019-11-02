import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResourcesContentModel } from '../models/resources-content.model';
import { environment } from '../../environments/environment';

@Injectable()
export class ResourcesHttpService {

  constructor(private http: HttpClient) {
  }

  public getResources(): Observable<ResourcesContentModel[]> {
    const url = environment.API_URL + '/resource';
    return this.http.get<ResourcesContentModel[]>(url);
  }

  public saveResource(reseource: ResourcesContentModel): Observable<ResourcesContentModel[]> {
    const url = `${environment.API_URL}/resource/${reseource.id}`;
    return this.http.put<ResourcesContentModel[]>(url, reseource);
  }
}
