import { Component } from '@angular/core';
import { ApplicationHttpService } from '../../../core/http-services/application.http-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html'
})
export class ApplicationsComponent {

  applications = this.applicationHttpService.getAllApplications();

  constructor(public applicationHttpService: ApplicationHttpService, private router: Router) {
  }

  navigateToApplication(application: any) {
    this.router.navigate([`hub/applications/${application.id}`]);
  }
}
