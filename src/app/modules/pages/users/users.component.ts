import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { Router } from '@angular/router';
import { UserHttpService } from "../../../core/http-services/user.http-service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})

export class UsersComponent implements OnInit {

  public users: User[];
  public usersToDisplay: User[];

  constructor(private router: Router, private userService: UserHttpService) {

  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (response) => {
        this.users = response;
        this.usersToDisplay = response;
      },
      () => console.log('i dont know how to handle this error :) We will have some monkeys fix this error soon.'));
  }

  goToUser(userId: number) {
    this.router.navigate([`hub/users/${userId}`]);
  }

  updateUserList(searchString: string) {
    this.usersToDisplay = this.users.filter(user => {
      return user.firstName.toLowerCase().includes(searchString.toLowerCase())
        || user.email.toLowerCase().includes(searchString.toLowerCase())
        || searchString === '';
    });
  }
}
