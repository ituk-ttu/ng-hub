import {Component, Input, OnInit} from '@angular/core';
import { MentorProfileModel } from '../../../shared/models/mentor-profile.model';
import {MentorProfilesHttpService} from '../../../core/http-services/mentor-profiles.http-service';

@Component({
  selector: 'app-mentor-card',
  templateUrl: './mentor-card.component.html',
  styleUrls: ['./mentor-card.component.sass']
})
export class MentorCardComponent implements OnInit {

  @Input()
  public mentor: MentorProfileModel;
  public showGif = false;
  public profilePic: string;
  public readonly PLACEHOLDER = 'https://www.productionhouse.ee/wp-content/uploads/2017/10/placeholder.jpg';

  constructor(private mentorProfilesHttpService: MentorProfilesHttpService) {
  }

  ngOnInit(): void {
    this.mentorProfilesHttpService.getMentorProfilePic(this.mentor.id).subscribe(img => {
        this.profilePic = img;
      }
    );
  }

  public setPlaceholderPicture() {
    this.profilePic = this.PLACEHOLDER;
  }

  public toggleGif() {
    this.showGif = !this.showGif;
  }
}
