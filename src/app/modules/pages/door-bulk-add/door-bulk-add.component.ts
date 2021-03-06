import {Component, OnInit} from '@angular/core';
import {UserHttpService} from '../../../core/http-services/user.http-service';
import {User} from '../../../shared/models/user.model';
import {DoorHttpService} from '../../../core/http-services/door.http-service';
import {Router} from '@angular/router';

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

  constructor(private userHttpService: UserHttpService,
              private doorHttpsService: DoorHttpService,
              private router: Router) {
  }

  ngOnInit() {
    this.userHttpService.getAllUsers(false).subscribe(e => {
      this.users = e;
      this.usersSearchResult = e;
    });

    this.doorHttpsService.getAllDoors().subscribe(doors => {
      this.rooms = doors.map(door => door.code);
      this.roomsSearchResult = [...this.rooms];

    });
  }


  public searchRoomsvalue(value: any) {
    this.roomsSearchResult = this.rooms.filter(e => {
      return (e.includes(value)) && !this.selectedRooms.includes(e);
    });
  }


  public searchUsers(value: any) {
    this.usersSearchResult = this.users.filter(e => {
      return (e.firstName.includes(value) || e.lastName.includes(value)) && !this.selectedUsers.includes(e);
    });
  }

 public removeUserFromSelection(user: User) {
    this.usersSearchResult.push(user);
    this.selectedUsers = this.selectedUsers.filter(e =>  e !== user);
  }

  public addUserToSelection(user: User) {
    this.usersSearchResult = this.usersSearchResult.filter(e =>  e !== user);
    this.selectedUsers.push(user);
  }

  public removeRoomFromSelection(room: string) {
    this.roomsSearchResult.push(room);
    this.selectedRooms = this.selectedRooms.filter(e =>  e !== room);
  }

  public addRoomToSelection(room: string) {
    this.roomsSearchResult = this.roomsSearchResult.filter(e =>  e !== room);
    this.selectedRooms.push(room);
  }

  public addRoomAccess() {
    const doorList = [];
    const users: number[] = [];
    this.selectedRooms.forEach(room => {
        doorList.push({code: room});
    });
    this.selectedUsers.forEach(user => {
      users.push(user.id);
      console.log(users)
    });
    this.doorHttpsService.addBulkUserDoorServices({doors: doorList, userIds: users})
        .subscribe(() => {
          this.router.navigate(['hub/door-permissions']);
        });
  }

  public removeRoomAccess() {
    alert('Not implemented!');
  }
}
