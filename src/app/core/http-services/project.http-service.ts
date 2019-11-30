import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {TokenModel} from '../../shared/models/token.model';
import {Project} from '../../shared/models/project.model';
import {Observable} from "rxjs";

@Injectable()
export class ProjectHttpService {

  constructor(private http: HttpClient) {
  }

  public getAllProjects(): Observable<Project[]> {
    const url = environment.API_URL + '/project';
    return this.http.get<Project[]>(url);
  }

  public createProject(project: Project) {
    const url = environment.API_URL + '/project';
    return this.http.post<TokenModel>(url, project);
  }

  public updateProject(project: Project, projectId: string) {
    const url = `${environment.API_URL}/project/${projectId}` ;
    return this.http.put<TokenModel>(url, project);
  }

  public deleteProject(projectId: string) {
    const url = `${environment.API_URL}/project/${projectId}` ;
    return this.http.delete<TokenModel>(url);
  }

}
