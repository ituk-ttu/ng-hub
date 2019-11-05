import { Component, OnInit } from '@angular/core';
import { GeneralMeetingsHttpService } from '../../../core/services/general-meetings.http-service';
import { FormControl, FormGroup } from '@angular/forms';
import { GeneralMeeting } from '../../../shared/models/general-meeting.model';
import { AuthContext } from '../../../core/services/authContext';

@Component({
  templateUrl: './general-meetings.component.html',
  styleUrls: ['./general-meetings.component.sass']
})
export class GeneralMeetingsComponent implements OnInit {

  generalMeetings = this.generalMeetingHttpService.getAllMeetings();
  newMeetingForm: FormGroup;
  private isNewMeetingFormActive = false;
  private selectedGeneralMeeting: string;

  constructor(public generalMeetingHttpService: GeneralMeetingsHttpService, public auth: AuthContext) {
  }

  ngOnInit(): void {
    this.newMeetingForm = this.createFormGroup();
  }

  onSubmit() {
    this.selectedGeneralMeeting ?
      this.generalMeetingHttpService.updateMeeting(this.newMeetingForm.value, this.selectedGeneralMeeting)
        .subscribe(() => {
          this.resetFrom();
        }) :
      this.generalMeetingHttpService.createMeeting(this.newMeetingForm.value)
        .subscribe(() => {
          this.resetFrom();
        });
  }

  createFormGroup(meeting?: GeneralMeeting) {
    return new FormGroup({
      date: new FormControl(meeting ? meeting.date : null),
      election: new FormControl(meeting ? meeting.election : null),
      name: new FormControl(meeting ? meeting.name : null),
      protocolUrl: new FormControl(meeting ? meeting.protocolUrl : null)
    });
  }

  private resetFrom() {
    this.newMeetingForm.reset();
    this.isNewMeetingFormActive = false;
    delete this.selectedGeneralMeeting;
    this.generalMeetings = this.generalMeetingHttpService.getAllMeetings();
  }

  hideFrom() {
    this.isNewMeetingFormActive = false;
    this.newMeetingForm.reset();
    delete this.selectedGeneralMeeting;
  }

  toggleNewMeetingForm() {
    this.isNewMeetingFormActive = !this.isNewMeetingFormActive;
    delete this.selectedGeneralMeeting;
  }

  chooseGeneralMeetingToEdit(meeting: GeneralMeeting) {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    this.isNewMeetingFormActive = false;
    this.selectedGeneralMeeting = meeting.id;
    this.newMeetingForm = this.createFormGroup(meeting);
    this.newMeetingForm.addControl('id', new FormControl(meeting.id));
  }

  copyProtocolUrlToClipboard(protocolLink: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.opacity = '0';
    selBox.value = protocolLink;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
