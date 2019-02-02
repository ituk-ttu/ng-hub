import {Component, OnInit} from '@angular/core';
import {MyDetailsHttpService} from '../../services/my-details.http-service';
import {MentorProfileModel} from '../../models/mentor-profile.model';

@Component({
  selector: 'app-my-mentor-profile',
  templateUrl: './my-mentor-profile.component.html',
  styleUrls: ['./my-mentor-profile.component.css']
})
export class MyMentorProfileComponent implements OnInit {

  public myProfile: MentorProfileModel;
  public showModal: boolean;

  constructor(private mentorHttpService: MyDetailsHttpService) {
    this.getProfile();
  }

  ngOnInit() {
  }

  public setProfileEnabledStatus(status: boolean) {
    if (this.myProfile) {
      this.myProfile.enabled = status;
    }
  }

  public save() {
    this.mentorHttpService.saveMentorProfile(this.myProfile).subscribe(
      () => console.log('nice'),
      () => console.log('not nice'));
  }

  public getProfile() {
    this.mentorHttpService.getMyMentorProfile().subscribe(
      (response) => this.myProfile = response,
      () => console.log('error getting my mentor profile')
    );
  }
}
