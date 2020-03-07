import { Component } from '@angular/core';
import {EventsHttpService} from '../../../core/http-services/events.http-service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent {

  private CALENDAR_ID = 'g86lrthmecu19gh7arvcj76f08@group.calendar.google.com/';
  private GOOGLE_CALENDAR_API_KEY = 'AIzaSyATtCseJ8dZJaJ7XsLTIXfCbfpYOseGgHM';
  public events = this.eventsHttpService.getAllEvents(this.CALENDAR_ID, this.GOOGLE_CALENDAR_API_KEY);
  constructor(private eventsHttpService: EventsHttpService) { }

}
