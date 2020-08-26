import {Component, OnInit} from '@angular/core';
import {MentorProfileModel} from '../../../shared/models/mentor-profile.model';
import {AuthContext} from '../../../core/services/authContext';
import {ActivatedRoute} from '@angular/router';
import {MentorProfilesHttpService} from '../../../core/http-services/mentor-profiles.http-service';

@Component({
  selector: 'app-my-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: ['./mentor-profile.component.sass']
})
export class MentorProfileComponent implements OnInit {

  public hasProfileBeenUpdated = false;
  public mentorProfile: MentorProfileModel;

  constructor(private mentorHttpService: MentorProfilesHttpService,
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
    this.mentorHttpService.updateMentorProfile(this.mentorProfile).subscribe(
      () => console.log('nice'),
      () => console.log('not nice'));
  }

  public getProfile() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10) || this.authContext.user.id;
    this.mentorHttpService.findMentorByUserId(id).subscribe(
      (response) => this.mentorProfile = response,
      () => console.log('error getting my mentor profile')
    );
  }


  savePicture(base64img: string) {
    this.mentorProfile.picture = base64img;
    this.mentorHttpService.saveProfilePicBase64(this.mentorProfile.user.id, base64img).subscribe(
      () => {
        this.hasProfileBeenUpdated = true;
        // as app-mentor-card component is not a presentational component but loads profile pic
        // from BE then i reset the component so i'l load again ...
        setTimeout(() => this.hasProfileBeenUpdated = false, 0);
      },
      () => console.log('not nice'));
  }
}
