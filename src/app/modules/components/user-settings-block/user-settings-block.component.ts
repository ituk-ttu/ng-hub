import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserHttpService } from "../../../core/http-services/user.http-service";

@Component({
  selector: 'app-user-settings-block',
  templateUrl: './user-settings-block.component.html',
  styleUrls: ['./user-settings-block.component.sass']
})
export class UserSettingsBlockComponent implements OnInit {
  public user: User;

  @Input()
  private userId: number;
  @Input()
  private selfEditing: boolean;
  roleChanged: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserHttpService) {
  }

  ngOnInit() {
    this.userService.getUserById(this.userId).subscribe((result) => {
      this.user = result;
    });
  }

  updateUser() {
    if (!this.selfEditing) {
      this.userService.putUser(this.user).subscribe(() => this.navigateBack());
    }
    if (this.roleChanged) {
      this.userService.changeRole(this.user.role, this.user.id).subscribe();
    }
  }

  navigateBack() {
    this.router.navigate(['/hub/users']);
  }
}
