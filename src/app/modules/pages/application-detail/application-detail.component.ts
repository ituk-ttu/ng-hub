import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationHttpService } from '../../../core/http-services/application.http-service';
import { ApplicationModel } from '../../../shared/models/application.model';
import { AuthContext } from '../../../core/services/authContext';
import { ApplicationStatus } from '../../../shared/models/application-status.enum';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.sass']
})
export class ApplicationDetailComponent implements OnInit {
  application: ApplicationModel;

  constructor(public authContext: AuthContext,
              private route: ActivatedRoute,
              public applicationHttpService: ApplicationHttpService,
              private router: Router) {
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.applicationHttpService.getApplicationById(id).subscribe(e => {
      this.application = e;
    });
  }

  deleteApplication(application: ApplicationModel) {
    this.applicationHttpService.deleteApplication(application.id)
        .subscribe(val => this.router.navigate([`hub/applications`]));
  }

  acceptApplication(id: number) {
    this.applicationHttpService.changeApplicationStatus(id, ApplicationStatus.ACCEPTED)
        .subscribe(val => this.router.navigate([`hub/applications`]));
  }

  refuseApplication(id: number) {
    this.applicationHttpService.changeApplicationStatus(id, ApplicationStatus.REJECTED)
        .subscribe(val => this.router.navigate([`hub/applications`]));
  }
}
