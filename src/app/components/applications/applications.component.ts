import {Component, OnInit} from '@angular/core';
import {ApplicationHttpService} from '../../services/application.http-service';
import {ApplicationModel} from '../../models/application.model';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html'
})
export class ApplicationsComponent implements OnInit {
  public showSpinner: false;
  public applications: ApplicationModel[];

  constructor(private applicationHttpService: ApplicationHttpService) {
  }

  ngOnInit() {
    this.applicationHttpService.getAllApplications().subscribe((result) => this.applications = result);
  }

}
