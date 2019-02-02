import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {UserHttpService} from "../../services/user.http-service";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})

export class SettingsComponent {

    public user: User;

    constructor(private userHttpService: UserHttpService) {
        this.userHttpService.getUserById('22').subscribe(
            (response) => this.user = response,
            () => console.log('Error getting user by ID')
        )
    }

}
