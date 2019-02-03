import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail-view',
  templateUrl: './user-detail-view.component.html',
  styleUrls: ['./user-detail-view.component.css']
})

export class UserDetailViewComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }


  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    alert(userId);

  }

}
