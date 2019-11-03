import { Component, OnInit } from '@angular/core';
import { GeneralMeetingsHttpService } from '../../../core/services/general-meetings.http-service';
import { FormControl, FormGroup } from '@angular/forms';
import { GeneralMeeting } from '../../../shared/models/general-meeting.model';

@Component({
  templateUrl: './general-meetings.component.html',
  styleUrls: ['./general-meetings.component.sass']
})
export class GeneralMeetingsComponent implements OnInit {

  generalMeetings = this.generalMeetingHttpService.getAllMeetings();
  newMeetingForm: FormGroup;
  private isNewMeetingFormActive = false;
  private selectedGeneralMeeting: string;

  constructor(public generalMeetingHttpService: GeneralMeetingsHttpService) {
  }

  ngOnInit(): void {
    this.newMeetingForm = this.createFormGroup();
  }

  onSubmit() {
    if (this.selectedGeneralMeeting) {
      this.generalMeetingHttpService.updateMeeting(this.newMeetingForm.value, this.selectedGeneralMeeting)
        .subscribe(() => {
          this.resetFrom();
        });
    } else {
      this.generalMeetingHttpService.createMeeting(this.newMeetingForm.value)
        .subscribe(() => {
          this.resetFrom();
        });
    }
  }

  createFormGroup() {
    return new FormGroup({
      date: new FormControl(),
      election: new FormControl(),
      name: new FormControl(),
      protocolUrl: new FormControl()
    });
  }

  private resetFrom() {
    this.newMeetingForm.reset();
    this.isNewMeetingFormActive = false;
    delete this.selectedGeneralMeeting;
    this.generalMeetings = this.generalMeetingHttpService.getAllMeetings();
  }

  toggleNewMeetingForm() {
    this.isNewMeetingFormActive = !this.isNewMeetingFormActive;
    delete this.selectedGeneralMeeting;
  }

  hideFrom() {
    this.isNewMeetingFormActive = false;
    this.newMeetingForm.reset();
    delete this.selectedGeneralMeeting;
  }

  chooseGeneralMeetingToEdit(meeting: GeneralMeeting) {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
    this.isNewMeetingFormActive = false;
    this.selectedGeneralMeeting = meeting.id;
    this.newMeetingForm = new FormGroup({
      id: new FormControl(meeting.id),
      date: new FormControl(meeting.date),
      election: new FormControl(meeting.election),
      name: new FormControl(meeting.name),
      protocolUrl: new FormControl(meeting.protocolUrl)
    });
  }

  copyProtocolUrlToClipboard(protocolLink: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = protocolLink;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
