import { Component, Input } from '@angular/core';
import { MentorProfileModel } from '../../../shared/models/mentor-profile.model';

@Component({
  selector: 'app-mentor-card',
  templateUrl: './mentor-card.component.html',
  styleUrls: ['./mentor-card.component.sass']
})
export class MentorCardComponent {

  @Input()
  public mentor: MentorProfileModel;

  public showGif = false;

  constructor() { }

  toggleGif() {
    this.showGif = !this.showGif;
  }
}
