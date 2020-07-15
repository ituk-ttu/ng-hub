import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralMeetingsHttpService } from '../../../../core/http-services/general-meetings.http-service';
import { GeneralMeetingParticipation } from '../../../../shared/models/general-meeting-participation.model';
import { GeneralMeeting } from '../../../../shared/models/general-meeting.model';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'general-meeting-participation',
  templateUrl: './general-meeting-participation.component.html',
  styleUrls: ['./general-meeting-participation.component.sass']
})
export class GeneralMeetingParticipationComponent implements OnInit {

  participations: GeneralMeetingParticipation[];
  participationsSearchResult: GeneralMeetingParticipation[];
  meetingId: string;
  meeting: GeneralMeeting;
  form: FormGroup;

  constructor(private generalMeetingsService: GeneralMeetingsHttpService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.buildForm();
    this.meetingId = this.route.snapshot.paramMap.get('id');
    this.generalMeetingsService.getMeeting(this.meetingId).subscribe(e => this.meeting = e);
    this.generalMeetingsService.getParticipations(this.meetingId).subscribe(e => {
      this.participations = e;
      this.participationsSearchResult = e;
    });

    this.form.valueChanges
        .pipe(
            debounceTime(20),
            distinctUntilChanged())
        .subscribe(() => this.searchUser());
  }

  public updateParticipants(participant) {
    this.generalMeetingsService.updateParticipations(participant).subscribe((e: GeneralMeetingParticipation) => console.log('uuhh'));
  }

  toggleParticipation(participation: GeneralMeetingParticipation) {
    participation.participated = !participation.participated;
    this.updateParticipants(participation);
  }

  private buildForm() {
    this.form = new FormGroup({
      search: new FormControl()
    });
  }

  private searchUser() {
    const message = this.form.value.search.toLowerCase();
    this.participationsSearchResult = this.participations.filter(e => {
      return e.user.firstName.toLowerCase().includes(message) || e.user.lastName.toLowerCase().includes(message);
    });
  }
}
