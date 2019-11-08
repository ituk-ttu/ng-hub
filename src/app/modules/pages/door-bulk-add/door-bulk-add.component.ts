import { Component, OnInit } from '@angular/core';
import { UserHttpService } from '../../../core/http-services/user.http-service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-door-bulk-add',
  templateUrl: './door-bulk-add.component.html',
  styleUrls: ['./door-bulk-add.component.sass']
})
export class DoorBulkAddComponent implements OnInit {
  private users: User[];
  public usersSearchResult: User[];
  public selectedUsers: User[] = [];
  private rooms: string[];
  public roomsSearchResult: string[];
  public selectedRooms: string[] = [];

  constructor(private userHttpService: UserHttpService) {
  }

  ngOnInit() {
    this.userHttpService.getAllUsers().subscribe(e => {
      this.users = e;
      this.usersSearchResult = e;
    });
    this.rooms = ['ICT-315', 'ICT-316', 'ICT-362', 'ICT-515'];
    this.roomsSearchResult = [...this.rooms];
  }


  searchRoomsvalue(value: any) {
    this.roomsSearchResult = this.rooms.filter(e => {
      return (e.includes(value)) && !this.selectedRooms.includes(e);
    });
  }


  searchUsers(value: any) {
    this.usersSearchResult = this.users.filter(e => {
      return (e.firstName.includes(value) || e.lastName.includes(value)) && !this.selectedUsers.includes(e);
    });
  }

  removeUserFromSelection(user: User) {
    this.usersSearchResult.push(user);
    this.selectedUsers = this.selectedUsers.filter(e =>  e !== user);
  }

  addUserToSelection(user: User) {
    this.usersSearchResult = this.usersSearchResult.filter(e =>  e !== user);
    this.selectedUsers.push(user);
  }

  removeRoomFromSelection(room: string) {
    this.roomsSearchResult.push(room);
    this.selectedRooms = this.selectedRooms.filter(e =>  e !== room);
  }

  addRoomToSelection(room: string) {
    this.roomsSearchResult = this.roomsSearchResult.filter(e =>  e !== room);
    this.selectedRooms.push(room);
  }

  addRoomAccess() {
    alert('Not implemented!');
  }

  removeRoomAccess() {
    alert('Not implemented!');
  }
}
