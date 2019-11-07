import { Component, OnInit } from '@angular/core';
import { ProjectHttpService } from "../../../core/http-services/project.http-service";


@Component({
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.sass']
})
export class ProjectSummaryComponent implements OnInit {

  projectSummaries = this.projectHttpService.getAllProjects();

  constructor(public projectHttpService: ProjectHttpService) { }

  ngOnInit() {
  }

}
