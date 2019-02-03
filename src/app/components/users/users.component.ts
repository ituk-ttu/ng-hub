import {Component, OnInit} from '@angular/core';
import {UserHttpService} from '../../services/user.http-service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  public users: any[];
  public searchString = '';

  constructor(private userService: UserHttpService) {
    this.userService.getAllUsers().subscribe(
      (response) => this.users = response,
      () => console.log('i dont know how to handle this error :) We will have some monkeys fix this error soon.'));
  }

  ngOnInit() {
  }

  showUser(user: User) {
    if (user.name.indexOf(this.searchString) >= 0
      || user.email.indexOf(this.searchString) >= 0
      || user.telegram.indexOf(this.searchString) >= 0
      || this.searchString === '') {
      return true;
    }
  }

}
