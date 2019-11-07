import { Component, OnInit } from '@angular/core';
import { MentorProfileModel } from '../../../shared/models/mentor-profile.model';
import { AuthContext } from '../../../core/services/authContext';
import { ActivatedRoute } from '@angular/router';
import { MyDetailsHttpService } from "../../../core/http-services/my-details.http-service";

@Component({
  selector: 'app-my-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: ['./mentor-profile.component.sass']
})
export class MentorProfileComponent implements OnInit {

  public mentorProfile: MentorProfileModel;

  constructor(private mentorHttpService: MyDetailsHttpService,
              private authContext: AuthContext,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getProfile();
  }

  public setProfileEnabledStatus(status: boolean) {
    if (this.mentorProfile) {
      this.mentorProfile.enabled = status;
    }
  }

  public save() {
    this.mentorHttpService.saveMentorProfile(this.mentorProfile).subscribe(
      () => console.log('nice'),
      () => console.log('not nice'));
  }

  public getProfile() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10) || this.authContext.user.id;
    this.mentorHttpService.getMentorProfile(id).subscribe(
      (response) => this.mentorProfile = response,
      () => console.log('error getting my mentor profile')
    );
  }

  savePicture($event: string) {
    this.mentorProfile.picture = $event;
    this.mentorHttpService.saveMentorProfile(this.mentorProfile).subscribe(
      () => console.log('nice'),
      () => console.log('not nice'));
  }
}
