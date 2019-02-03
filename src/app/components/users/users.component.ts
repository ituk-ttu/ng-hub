import {Component, OnInit} from '@angular/core';
import {UserHttpService} from '../../services/user.http-service';
import {User} from '../../models/user.model';
import {Router} from "@angular/router";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

    public users: any[];
    public searchString = '';

    constructor(private router: Router, private userService: UserHttpService) {
        this.userService.getAllUsers().subscribe(
            (response) => this.users = response,
            () => console.log('i dont know how to handle this error :) We will have some monkeys fix this error soon.'));
    }

    ngOnInit() { }

    showUser(user: User) {
        if (user.name.toLowerCase().indexOf(this.searchString.toLowerCase()) >= 0
            || user.email.toLowerCase().indexOf(this.searchString.toLowerCase()) >= 0
            || user.telegram.toLowerCase().indexOf(this.searchString.toLowerCase()) >= 0
            || this.searchString === '') {
            return true;
        }
    }

    goToUser(userId: number) {
        this.router.navigate([`hub/users/${userId}`]);
    }

}
