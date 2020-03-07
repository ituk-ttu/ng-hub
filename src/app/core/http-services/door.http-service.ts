import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DoorPermissionModel} from '../../shared/models/door-permission.model';
import {DoorModel} from '../../shared/models/door.model';
import {AddDoorModel} from '../../shared/models/add-door.model';

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

    getAllUserDoorsServices(): Observable<DoorPermissionModel[]> {
        const url = `${environment.API_URL}/door/users`;
        return this.http.get<DoorPermissionModel[]>(url);
    }

    getAllDoors(): Observable<DoorModel[]> {
        const url = `${environment.API_URL}/door`;
        return this.http.get<DoorModel[]>(url);
    }

    addBulkUserDoorServices(usersAndDoorsBulk: AddDoorModel): Observable<DoorPermissionModel> {
        const url = `${environment.API_URL}/door/batch/add`;
        return this.http.post<DoorPermissionModel>(url, usersAndDoorsBulk);
    }

    public deleteDoorRight(userId: number, payload: any): Observable<any> {
        const url = `${environment.API_URL}/door/${userId}/delete`;
        return this.http.put<any>(url, payload);
    }
}
