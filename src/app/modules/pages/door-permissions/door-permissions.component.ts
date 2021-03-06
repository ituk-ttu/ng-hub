import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {Observable} from 'rxjs';
import {DoorPermissionModel} from '../../../shared/models/door-permission.model';
import {DoorHttpService} from '../../../core/http-services/door.http-service';
import {Router} from '@angular/router';
import {DoorModel} from "../../../shared/models/door.model";

@Component({
    templateUrl: './door-permissions.component.html'
})
export class DoorPermissionsComponent implements OnInit {

    public users: DoorPermissionModel[];
    public usersToDisplay: DoorPermissionModel[];

    constructor(private router: Router,
                private doorService: DoorHttpService) {
    }

    ngOnInit() {
        this.doorService.getAllUserDoorsServices().subscribe((response) => {
            this.users = response;
            this.usersToDisplay = response;
        }, () => console.log('i dont know how to handle this error :) We will have some monkeys fix this error soon.'));
    }

    public goToUser(userId: number) {
        this.router.navigate([`hub/users/${userId}`]);
    }

    public updateUserList(searchString: string) {
        this.usersToDisplay = this.users.filter(user => {
            return user.firstName.toLowerCase().includes(searchString.toLowerCase())
                || searchString === '';
        });
    }

    public getJoinedRooms(doors: DoorModel[]): string {
        return doors.map(door => door.code).join(', ');
    }
}
