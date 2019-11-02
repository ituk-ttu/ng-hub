import { Component } from '@angular/core';
import { ApplicationHttpService } from '../../../core/services/application.http-service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html'
})
export class ApplicationsComponent {

  applications = this.applicationHttpService.getAllApplications();

  constructor(public applicationHttpService: ApplicationHttpService) {
  }

}
