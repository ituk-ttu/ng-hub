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

  constructor(private mentorHttpService: MyDetailsHttpService) {
    mentorHttpService.getMyMentorProfile().subscribe(
      (response) => this.myProfile = response,
      () => console.log('error getting my mentor profile')
    );
  }

  ngOnInit() {
    this.mentorHttpService.getMyMentorProfile().subscribe(
      (response) => this.myProfile = response,
      () => console.log('error getting my mentor profile')
    );
  }

}
