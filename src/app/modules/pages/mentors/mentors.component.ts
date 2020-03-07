import { Component, OnInit } from '@angular/core';
import { MentorProfileModel } from '../../../shared/models/mentor-profile.model';
import { MentorProfilesHttpService } from "../../../core/http-services/mentor-profiles.http-service";

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.sass']
})

export class MentorsComponent implements OnInit {
  public mentorProfiles: MentorProfileModel[];

  constructor(private httpService: MentorProfilesHttpService) {
  }

  ngOnInit(): void {
    this.httpService.getAllMentorProfiles().subscribe(
      (response) => this.mentorProfiles = response,
      () => console.log('Error getting mentor profiles')
    );
  }
}
