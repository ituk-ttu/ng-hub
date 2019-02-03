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
    if (user.name.toLowerCase().indexOf(this.searchString.toLowerCase()) >= 0
      || user.email.toLowerCase().indexOf(this.searchString.toLowerCase()) >= 0
      || user.telegram.toLowerCase().indexOf(this.searchString.toLowerCase()) >= 0
      || this.searchString === '') {
      return true;
    }
  }

}
