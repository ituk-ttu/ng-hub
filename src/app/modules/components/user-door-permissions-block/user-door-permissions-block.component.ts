import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../shared/models/user.model';
import {DoorHttpService} from '../../../core/http-services/door.http-service';
import {Observable} from 'rxjs';
import {DoorPermissionModel} from '../../../shared/models/door-permission.model';

@Component({
    selector: 'app-user-door-permissions-block',
    templateUrl: './user-door-permissions-block.component.html',
    styleUrls: ['./user-door-permissions-block.component.sass']
})
export class UserDoorPermissionsBlockComponent implements OnInit {

    @Input()
    private userId: number;

    userPermissions: Observable<DoorPermissionModel[]>;


    constructor(private doorService: DoorHttpService
    ) {
    }

    ngOnInit(): void {
        this.userPermissions = this.doorService.getUserDoorServices(this.userId);
    }

    removeDoorPermission(doorCode: string) {
        this.doorService.deleteDoorRight(this.userId, [{code: doorCode}])
            .subscribe(e => {
                this.userPermissions = this.doorService.getUserDoorServices(this.userId);
            });
    }

}
