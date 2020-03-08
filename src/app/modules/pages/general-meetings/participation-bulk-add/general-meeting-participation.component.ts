import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../shared/models/user.model';
import {UserHttpService} from '../../../../core/http-services/user.http-service';
import {DoorHttpService} from '../../../../core/http-services/door.http-service';
import {GeneralMeetingsHttpService} from '../../../../core/http-services/general-meetings.http-service';
import {GeneralMeetingParticipation} from '../../../../shared/models/general-meeting-participation.model';
import {GeneralMeeting} from '../../../../shared/models/general-meeting.model';

@Component({
  selector: 'general-meeting-participation',
  templateUrl: './general-meeting-participation.component.html',
  styleUrls: ['./general-meeting-participation.component.sass']
})
export class GeneralMeetingParticipationComponent implements OnInit {
  participations: GeneralMeetingParticipation[];
  meetingId: string;
  meeting: GeneralMeeting;

  constructor(private generalMeetingsService: GeneralMeetingsHttpService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.meetingId = this.route.snapshot.paramMap.get('id');
    this.generalMeetingsService.getMeeting(this.meetingId).subscribe(e => this.meeting = e);
    this.generalMeetingsService.getParticipations(this.meetingId).subscribe(e => this.participations = e);

  }

  public updateParticipants() {
      this.generalMeetingsService.updateParticipations(this.participations).subscribe(e => this.participations = e);
  }

    toggleParticipation(participation: GeneralMeetingParticipation) {
        participation.participated = !participation.participated;
    }

  goBack() {
    this.router.navigate([`hub/general-meetings`]);
  }
}
