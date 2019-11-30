import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DoorPermissionModel} from '../../shared/models/door-permission.model';

@Injectable({
    providedIn: 'root'
})
export class DoorHttpService {

    constructor(private http: HttpClient) {
    }

    getUserDoorServices(id: number): Observable<DoorPermissionModel[]> {
        const url = `${environment.API_URL}/door/${id}`;
        return this.http.get<DoorPermissionModel[]>(url);
    }

    getAllUserDoorsServices() : Observable<DoorPermissionModel[]> {
        const url = `${environment.API_URL}/door/users`;
        return this.http.get<DoorPermissionModel[]>(url);
    }
}
