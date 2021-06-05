import {Component, Input} from '@angular/core';
import {Project} from '../../../shared/models/project.model';
import * as moment from 'moment';
import 'moment/locale/et';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.sass']
})
export class ProjectCardComponent {

  @Input()
  public project: Project;

  private moment: any = moment;

  constructor() {
    moment.locale('et');
  }

}
