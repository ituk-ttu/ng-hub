import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResourcesContentModel } from '../../shared/models/resources-content.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class ResourcesHttpService {

  constructor(private http: HttpClient) {
  }

  public getResources(): Observable<ResourcesContentModel[]> {
    const url = environment.API_URL + '/resource';
    return this.http.get<ResourcesContentModel[]>(url);
  }

  public saveResource(resource: ResourcesContentModel): Observable<ResourcesContentModel[]> {
    if (resource.id) {
      return this.http.put<ResourcesContentModel[]>(`${environment.API_URL}/resource`, resource);
    }
    return this.http.post<ResourcesContentModel[]>(`${environment.API_URL}/resource`, resource);
  }

  public deleteResource(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.API_URL}/resource/${id}`);
  }
}
