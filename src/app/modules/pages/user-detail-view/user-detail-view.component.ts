import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserHttpService } from '../../../core/services/user.http-service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-user-detail-view',
  templateUrl: './user-detail-view.component.html',
  styleUrls: ['./user-detail-view.component.css']

})

export class UserDetailViewComponent implements OnInit {

  public user: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserHttpService) {
  }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(userId).subscribe((result) => {
      this.user = result;
    });
  }

  updateUser() {
      this.userService.putUser(this.user).subscribe(response => {});
      this.navigateBack();
  }

  navigateBack() {
    this.router.navigate(['/hub/users']);
  }
}
