import {Component, Input, OnInit} from '@angular/core';
import {UserHttpService} from '../../../core/http-services/user.http-service';
import {User} from '../../../shared/models/user.model';
import {UserFullNamePipe} from '../../../shared/pipes/userFullName.pipe';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.css']
})
export class UserSelectComponent implements OnInit {

  users: User[] = [];
  filteredUsers: Observable<User[]>;

  @Input()
  form: FormGroup;

  @Input()
  controlName: string;

  @Input()
  label: string;

  @Input()
  appearance: string;

  @Input()
  required: boolean;

  constructor(public userHttpService: UserHttpService) { }

  ngOnInit() {
    this.userHttpService.getAllUsers().subscribe(data => {
      this.users = data;
    });

    this.filteredUsers = this.form.controls[this.controlName].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  displayUser() {
    return (userObject: User) => {
      return userObject ? new UserFullNamePipe().transform(userObject) : '';
    };
  }

  private _filter(value: any): User[] {
    if (value instanceof Object) { return; }
    return value
        ? this.users.filter(user => new UserFullNamePipe().transform(user).toLowerCase().includes(value.toLowerCase()))
        : this.users;
  }
}
