import {Component, OnInit} from '@angular/core';
import {UserHttpService} from '../../services/user.http-service';
import {User} from '../../models/user.model';
import {UserSearchModel} from '../../models/user-search.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  public users: any[];
  public searchString: string = '';

  constructor(private userService: UserHttpService) {
    this.userService.getAllUsers().subscribe(
      (response) => this.users = response,
      () => console.log('i dont know how to handle this error :) We will have some monkeys fix this error soon.'));
  }

  ngOnInit() {
  }

  showUser(user: User) {
    if (user.name.indexOf(this.searchString)
        || user.email.indexOf(this.searchString)
        || user.telegram.indexOf(this.searchString)
        || this.searchString == '') {
        return true;
    }
  }

}
