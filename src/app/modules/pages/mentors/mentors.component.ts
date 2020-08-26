import {Component, OnInit} from '@angular/core';
import { MentorProfileModel } from '../../../shared/models/mentor-profile.model';
import { MentorProfilesHttpService } from "../../../core/http-services/mentor-profiles.http-service";

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.sass']
})

export class MentorsComponent implements OnInit {
  allProfiles: MentorProfileModel[];
  public mentorProfiles: MentorProfileModel[];

  constructor(private httpService: MentorProfilesHttpService) {
  }

  ngOnInit(): void {
    this.httpService.getAllMentorProfiles().subscribe(
      (response) => {
        this.allProfiles = response;
        this.mentorProfiles = this.allProfiles.filter(item => item.enabled);
      },
      () => console.log('Error getting mentor profiles')
    );
  }

  triggerActive($event): void {
    if ($event.target.checked) {
      this.mentorProfiles = [...this.allProfiles];
    } else {
      const filtered = this.allProfiles.filter(item => item.enabled);
      this.mentorProfiles = [...filtered];
    }
  }
}
