import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserHttpService} from '../../../core/services/user.http-service';
import {User} from '../../../shared/models/user.model';

@Component({
  selector: 'app-user-detail-view',
  templateUrl: './user-detail-view.component.html',
  styleUrls: ['./user-detail-view.component.sass']

})

export class UserDetailViewComponent implements OnInit {

  public user: User;
  public userId: string;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
  }

}
