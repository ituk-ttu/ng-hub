import { Component, OnInit } from '@angular/core';
import { ApplicationModel } from '../../../shared/models/application.model';
import { ApplicationHttpService } from '../../../core/http-services/application.http-service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, take } from 'rxjs/operators';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html'
})
export class ApplicationsComponent implements OnInit {

  applications: ApplicationModel[];
  applicationsToDisplay: ApplicationModel[];

  searchForm: FormGroup;

  constructor(public applicationHttpService: ApplicationHttpService, private router: Router) {
  }

  ngOnInit() {
    this.buildForm();
    this.applicationHttpService.getAllApplications().subscribe(response => {
          this.applications = response;
          this.applicationsToDisplay = response;
        },
        () => console.log('i dont know how to handle this error :) We will have some monkeys fix this error soon.'));

    this.searchForm.valueChanges
        .pipe(debounceTime(20), distinctUntilChanged())
        .subscribe(() => this.filterApplications());
  }

  filterApplications() {
    const searchForm = this.searchForm.value;
    if (!Object.values(searchForm).some(x => x !== null && x !== '')) {
      this.applicationsToDisplay = this.applications;
      return;
    }
    this.applicationsToDisplay = this.applications.filter(application => {

      if (searchForm.name) {
        return (application.firstName + ' ' + application.lastName).toLowerCase().includes(searchForm.name.toLowerCase());
      }
      if (application.mentor && searchForm.mentor) {
        return (application.mentor.firstName + ' ' + application.mentor.lastName).toLowerCase().includes(searchForm.mentor.toLowerCase());
      }
      if (searchForm.personalCode) {
        return application.personalCode.toLowerCase().includes(searchForm.personalCode.toLowerCase());
      }
      if (searchForm.email) {
        return application.email.toLowerCase().includes(searchForm.email.toLowerCase());
      }
      if (searchForm.studentCode) {
        return application.studentCode.toLowerCase().includes(searchForm.studentCode.toLowerCase());
      }
    });
  }

  navigateToApplication(application: any) {
    this.router.navigate([`hub/applications/${application.id}`]);
  }

  private buildForm() {
    this.searchForm = new FormGroup({
      name: new FormControl(),
      personalCode: new FormControl(),
      email: new FormControl(),
      studentCode: new FormControl(),
      mentor: new FormControl(),
    });
  }
}
