import { Component, OnInit } from '@angular/core';
import { UserHttpService } from '../../../core/http-services/user.http-service';
import { User } from '../../../shared/models/user.model';
import {AddDoorModel} from "../../../shared/models/add-door.model";
import {DoorModel} from "../../../shared/models/door.model";
import {DoorHttpService} from "../../../core/http-services/door.https-service";

@Component({
  selector: 'app-door-bulk-add',
  templateUrl: './door-bulk-add.component.html',
  styleUrls: ['./door-bulk-add.component.sass']
})
export class DoorBulkAddComponent implements OnInit {
  private users: User[];
  public usersSearchResult: User[];
  public selectedUsers: User[] = [];
  private rooms: string[] = [];
  public roomsSearchResult: string[];
  public selectedRooms: string[] = [];
  private addDoorModel: AddDoorModel;
  constructor(private userHttpService: UserHttpService, private doorHttpsService: DoorHttpService) {
  }

  ngOnInit() {
    this.userHttpService.getAllUsers().subscribe(e => {
      this.users = e;
      this.usersSearchResult = e;
    });

    this.doorHttpsService.getAllDoors().subscribe(doors => {
      console.log(doors.map(door => door.code));
      this.rooms = doors.map(door => door.code);
      this.roomsSearchResult = [...this.rooms];

    });
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
    this.addDoorModel = new AddDoorModel();
    let doorModel = [];
    this.selectedRooms.forEach(function(room) {
      let temp = new DoorModel();
      temp.code = room;
      doorModel.push(temp);
    });

    let userIds: number[] = [];
    this.selectedUsers.forEach(function(user) {
      userIds.push(user.id);
    });

    this.addDoorModel.door = doorModel;
    this.addDoorModel.userIds = userIds;
    console.log(this.addDoorModel);
    this.doorHttpsService.addBulkUserDoorServices(this.addDoorModel);

  }

  removeRoomAccess() {

    alert('Not implemented!');
  }
}
