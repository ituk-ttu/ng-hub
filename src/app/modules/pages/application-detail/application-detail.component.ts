import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationHttpService } from '../../../core/http-services/application.http-service';
import { ApplicationModel } from '../../../shared/models/application.model';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.sass']
})
export class ApplicationDetailComponent implements OnInit {
  application: ApplicationModel;

  constructor(private route: ActivatedRoute, public applicationHttpService: ApplicationHttpService, private router: Router) {
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
    alert('Not implemented');
  }

  refuseApplication(id: number) {
    alert('Not implemented');
  }
}
