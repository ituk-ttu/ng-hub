import { Component } from '@angular/core';
import { AuthContext } from '../../../core/services/authContext';
import { FormControl, FormGroup } from '@angular/forms';
import { ResourcesContentModel } from '../../../shared/models/resources-content.model';
import { ResourcesHttpService } from '../../../core/http-services/resources.http-service';
import { EventsHttpService } from '../../../core/http-services/events.http-service';
import { BirthdaysHttpService } from '../../../core/http-services/birthdays.http-service';

@Component({
  templateUrl: './landing-page.component.html'
})

export class LandingPageComponent {
  public resources = this.resourcesService.getResources();
  public activeId;
  public resourceFrom: FormGroup;
  public newItemFormActive = false;
  private CALENDAR_ID = 'g86lrthmecu19gh7arvcj76f08@group.calendar.google.com/';
  private INNER_CALENDAR_ID = '1ofsrfgn87na3udab2frm5l374@group.calendar.google.com/';
  private GOOGLE_CALENDAR_API_KEY = 'AIzaSyATtCseJ8dZJaJ7XsLTIXfCbfpYOseGgHM';
  public events = this.eventsHttpService.getAllEvents(this.CALENDAR_ID, this.GOOGLE_CALENDAR_API_KEY);
  public innerEvents = this.eventsHttpService.getAllEvents(this.INNER_CALENDAR_ID, this.GOOGLE_CALENDAR_API_KEY)
  public birthdays = this.birthdaysHttpService.getBirthdays();

  constructor(private resourcesService: ResourcesHttpService,
              public auth: AuthContext,
              private eventsHttpService: EventsHttpService,
              private birthdaysHttpService: BirthdaysHttpService) {
    this.resourceFrom = this.createFormGroup();
  }

  private copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl(),
      comment: new FormControl(),
      url: new FormControl()
    });
  }

  setEditActive(resource: ResourcesContentModel) {
    this.newItemFormActive = false;
    this.activeId = resource.id;
    this.resourceFrom.addControl('id', new FormControl());
    this.resourceFrom.setValue({
      id: resource.id,
      name: resource.name,
      comment: resource.comment,
      url: resource.url
    });
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  onSubmit() {
    this.newItemFormActive = false;
    this.resourcesService.saveResource(this.resourceFrom.value)
      .subscribe(() => {
        this.resources = this.resourcesService.getResources();
        delete this.activeId;
      });
  }

  trackByFn(index, item) {
    return item.id;
  }

  toggleNewLinkForm() {
    this.resourceFrom = this.createFormGroup();
    this.newItemFormActive = !this.newItemFormActive;
    delete this.activeId;
  }

  hideInputForm() {
    this.newItemFormActive = false;
    delete this.activeId;
  }

  deleteResource(id: number) {
    this.resourcesService.deleteResource(id).subscribe(
      () => {
        this.resources = this.resourcesService.getResources();
      }
    );
  }
}

