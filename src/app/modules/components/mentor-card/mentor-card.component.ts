import {Component, Input, OnInit} from '@angular/core';
import { MentorProfileModel } from '../../../shared/models/mentor-profile.model';
import {environment} from '../../../../environments/environment';

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

  constructor() {
  }

  ngOnInit(): void {
    this.profilePic = `${environment.API_URL}/mentor/${this.mentor.id}/picture`;
  }

  public setPlaceholderPicture() {
    this.profilePic = this.PLACEHOLDER;
  }

  public toggleGif() {
    this.showGif = !this.showGif;
  }
}
