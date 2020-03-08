import { Component, OnInit } from '@angular/core';
import { ApplicationModel } from '../../../shared/models/application.model';
import { ApplicationHttpService } from '../../../core/http-services/application.http-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html'
})
export class ApplicationsComponent implements OnInit {

  applications: ApplicationModel[];
  applicationsToDisplay: ApplicationModel[];

  filters = {
    name: '',
    personalCode: '',
    email: '',
    studentCode: '',
    mentor: '',
  };

  constructor(public applicationHttpService: ApplicationHttpService, private router: Router) {
  }

  ngOnInit() {
    this.applicationHttpService.getAllApplications().subscribe(
        (response) => {
          this.applications = response;
          this.applicationsToDisplay = response;
        },
        () => console.log('i dont know how to handle this error :) We will have some monkeys fix this error soon.'));
  }

  filterApplications(filter: string, filterString: string) {
    this.filters[filter] = filterString;
    const filterKeys = Object.keys(this.filters);

    this.applicationsToDisplay = this.applications.filter(eachObj => {
      return filterKeys.every(eachKey => {

        if (!this.filters[eachKey]) {
          return true;
        }

        if (eachKey === 'name') {
          return (eachObj.firstName + ' ' + eachObj.lastName).toLowerCase().includes(this.filters[eachKey]);
        }

        if (eachKey === 'mentor' && eachObj.mentor) {
          return (eachObj.mentor.firstName + ' ' + eachObj.mentor.lastName).toLowerCase().includes(this.filters[eachKey]);
        }

        return eachObj[eachKey] ? eachObj[eachKey].toLowerCase().includes(this.filters[eachKey]) : false;
      });
    });
  }

  navigateToApplication(application: any) {
    this.router.navigate([`hub/applications/${application.id}`]);
  }
}
