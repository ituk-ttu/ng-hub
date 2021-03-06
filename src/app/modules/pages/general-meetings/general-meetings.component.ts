import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GeneralMeeting } from '../../../shared/models/general-meeting.model';
import { AuthContext } from '../../../core/services/authContext';
import { GeneralMeetingsHttpService } from '../../../core/http-services/general-meetings.http-service';
import { DoorPermissionModel } from '../../../shared/models/door-permission.model';
import { Router } from '@angular/router';

@Component({
    templateUrl: './general-meetings.component.html',
    styleUrls: ['./general-meetings.component.sass']
})
export class GeneralMeetingsComponent implements OnInit {

    generalMeetings = this.generalMeetingHttpService.getAllMeetings();
    newMeetingForm: FormGroup;
    isNewMeetingFormActive = false;
    selectedGeneralMeeting: string;

    constructor(public generalMeetingHttpService: GeneralMeetingsHttpService,
                private router: Router,
                public auth: AuthContext) {

    }

    private static createFormGroup(meeting?: GeneralMeeting) {
        return new FormGroup({
            date: new FormControl(meeting ? meeting.date : null),
            election: new FormControl(meeting ? meeting.election : null),
            protocolUrl: new FormControl(meeting ? meeting.protocolUrl : null),
            urgent: new FormControl(meeting ? meeting.urgent : null)
        });
    }

    ngOnInit(): void {
        this.newMeetingForm = GeneralMeetingsComponent.createFormGroup();
    }

    public onSubmit() {
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

    private resetFrom() {
        this.newMeetingForm.reset();
        this.isNewMeetingFormActive = false;
        delete this.selectedGeneralMeeting;
        this.generalMeetings = this.generalMeetingHttpService.getAllMeetings();
    }

    public hideFrom() {
        this.isNewMeetingFormActive = false;
        this.newMeetingForm.reset();
        delete this.selectedGeneralMeeting;
    }

    public toggleNewMeetingForm() {
        this.isNewMeetingFormActive = !this.isNewMeetingFormActive;
        delete this.selectedGeneralMeeting;
    }

    public addParticipants(meeting: GeneralMeeting) {
        this.router.navigate([`hub/general-meetings/${meeting.id}/participation`]);
    }

    public chooseGeneralMeetingToEdit(meeting: GeneralMeeting) {
        window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
        this.isNewMeetingFormActive = false;
        this.selectedGeneralMeeting = meeting.id;
        this.newMeetingForm = GeneralMeetingsComponent.createFormGroup(meeting);
        this.newMeetingForm.addControl('id', new FormControl(meeting.id));
    }

    public copyProtocolUrlToClipboard(protocolLink: string) {
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

    getName(meeting: GeneralMeeting): string {
        if (meeting.urgent) {
            return 'Erakorraline üldkoosolek';
        }
        return 'Üldkoosolek';
    }

    deleteGeneralMeeting(meeting: GeneralMeeting) {
        this.generalMeetingHttpService.delete(meeting.id)
            .subscribe(value => this.generalMeetings = this.generalMeetingHttpService.getAllMeetings());
    }
}
