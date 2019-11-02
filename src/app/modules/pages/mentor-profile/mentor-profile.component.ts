import {Component} from '@angular/core';
import {MyDetailsHttpService} from '../../../core/services/my-details.http-service';
import {MentorProfileModel} from '../../../shared/models/mentor-profile.model';
import {AuthContext} from '../../../core/services/authContext';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: ['./mentor-profile.component.sass']
})
export class MentorProfileComponent {

  public myProfile: MentorProfileModel;
  public openGifs: number[] = [];
  public showGif = false;

  constructor(private mentorHttpService: MyDetailsHttpService,
              private authContext: AuthContext,
              private route: ActivatedRoute) {
    this.getProfile();
  }

  public setProfileEnabledStatus(status: boolean) {
    if (this.myProfile) {
      this.myProfile.enabled = status;
    }
  }

  public toggleGif(currentStatus: boolean) {
    if (!currentStatus) {
      this.openGifs.push(this.myProfile.id);
      this.showGif = true;
    } else {
      const index: number = this.openGifs.indexOf(this.myProfile.id);
      if (index !== -1) {
        this.openGifs.splice(index, 1);
      }
      this.showGif = false;
    }
  }

  public save() {
    this.mentorHttpService.saveMentorProfile(this.myProfile).subscribe(
      () => console.log('nice'),
      () => console.log('not nice'));
  }

  public getProfile() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10) || this.authContext.user.id;

    this.mentorHttpService.getMentorProfile(id).subscribe(
      (response) => this.myProfile = response,
      () => console.log('error getting my mentor profile')
    );
  }
}
