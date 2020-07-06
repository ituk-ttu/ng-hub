import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../shared/models/user.model';
import {UserHttpService} from '../../../../core/http-services/user.http-service';
import {DoorHttpService} from '../../../../core/http-services/door.http-service';
import {GeneralMeetingsHttpService} from '../../../../core/http-services/general-meetings.http-service';
import {GeneralMeetingParticipation} from '../../../../shared/models/general-meeting-participation.model';
import {GeneralMeeting} from '../../../../shared/models/general-meeting.model';
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
  changedParticipations: GeneralMeetingParticipation[] = [];
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

  public updateParticipants() {
      this.generalMeetingsService.updateParticipations(this.changedParticipations).subscribe((e: GeneralMeetingParticipation[]) => {
        e.forEach(persistedMeeting => {
          const updatedParticipant: GeneralMeetingParticipation = this.participations.find(part => part.user.id === persistedMeeting.user.id);
          const existingParticipantId = this.participations.indexOf(updatedParticipant);
          this.participations[existingParticipantId] = persistedMeeting;
        });
      });
  }

    toggleParticipation(participation: GeneralMeetingParticipation) {
        participation.participated = !participation.participated;
        this.changedParticipations.push(participation);
    }

  goBack() {
    this.router.navigate([`hub/general-meetings`]);
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
