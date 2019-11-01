import { Component, OnInit } from '@angular/core';
import { MentorProfilesHttpService } from '../../services/mentor-profiles.http-service';
import { MentorProfileModel } from '../../models/mentor-profile.model';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.sass']
})

export class MentorsComponent {
  public mentorProfiles: MentorProfileModel[];

  constructor(private httpservice: MentorProfilesHttpService) {
    httpservice.getMentorProfiles().subscribe(
      (response) => this.mentorProfiles = response,
      () => console.log('Error getting mentor profiles')
    );
  }
}
