import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDoorPermissionModel} from '../../shared/models/user-door-permission.model';
import {AddDoorModel} from "../../shared/models/add-door.model";
import {DoorPermissionModel} from "../../shared/models/door-permission.model";
import {DoorModel} from "../../shared/models/door.model";

@Injectable({
    providedIn: 'root'
})
export class DoorHttpService {

    constructor(private http: HttpClient) {
    }

    getAllDoors(): Observable<DoorModel[]> {
        const url = `${environment.API_URL}/door`;
        return this.http.get<DoorModel[]>(url);
    }

    getUserDoorServices(id: number): Observable<UserDoorPermissionModel[]> {
        const url = `${environment.API_URL}/door/${id}`;
        return this.http.get<UserDoorPermissionModel[]>(url);
    }

    getAllUserDoorsServices(): Observable<UserDoorPermissionModel[]> {
        const url = `${environment.API_URL}/door/users`;
        return this.http.get<UserDoorPermissionModel[]>(url);
    }

    addBulkUserDoorServices(usersAndDoorsBulk: AddDoorModel): Observable<DoorPermissionModel> {
        const url = `${environment.API_URL}/door/batch/add`;
        return this.http.post<DoorPermissionModel>(url, usersAndDoorsBulk);
    }
}