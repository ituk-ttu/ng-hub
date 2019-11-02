import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserHttpService } from '../../services/user.http-service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-detail-view',
  templateUrl: './user-detail-view.component.html'
})

export class UserDetailViewComponent implements OnInit {

  public user: User;

  constructor(private route: ActivatedRoute,
              private userService: UserHttpService) {
  }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(userId).subscribe((result) => {
      this.user = result;
    });
  }

}
