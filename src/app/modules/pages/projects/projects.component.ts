import {Component, OnInit} from '@angular/core';
import {ProjectHttpService} from "../../../core/http-services/project.http-service";
import * as moment from 'moment';
import {Project} from "../../../shared/models/project.model";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthContext} from "../../../core/services/authContext";


@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  projectDateMap = {thisWeek: [], thisMonth: [], other: []};
  editProjectForm: FormGroup;
  private isEditFormViewActive = false;
  private selectedProject: string;

  constructor(public projectHttpService: ProjectHttpService, public auth: AuthContext) {
  }

  ngOnInit() {
    this.projectHttpService.getAllProjects().subscribe(data => this.populateDateMap(data));
    this.editProjectForm = this.createFormGroup();
  }

  onSubmit() {
    this.selectedProject ?
      this.projectHttpService.updateProject(this.editProjectForm.value, this.selectedProject)
        .subscribe(() => {
          this.resetFrom();
        }) :
      this.projectHttpService.createProject(this.editProjectForm.value)
        .subscribe(() => {
          this.resetFrom();
        });
  }

  createFormGroup(project?: Project) {
    return new FormGroup({
      title: new FormControl(project ? project.title : null),
      dateStart: new FormControl(project ? project.dateStart : null),
      dateEnd: new FormControl(project ? project.dateEnd : null),
      description: new FormControl(project ? project.description : null),
      projectLead: new FormControl(project ? project.projectLead : null),
      members: new FormControl(project ? project.members : null),
      budget: new FormControl(project ? project.budget : null),
      summary: new FormControl(project ? project.summary : null),
      userControl: new FormControl()
    });
  }

  private resetFrom() {
    this.editProjectForm.reset();
    this.isEditFormViewActive = false;
    delete this.selectedProject;
  }

  hideFrom() {
    this.isEditFormViewActive = false;
    this.editProjectForm.reset();
    delete this.selectedProject;
  }

  toggleEditProjectForm() {
    this.isEditFormViewActive = !this.isEditFormViewActive;
    delete this.selectedProject;
  }


  private populateDateMap(projects: Project[]) {
    this.projectDateMap.thisWeek = projects.filter(project =>
      moment(project.dateStart).isAfter(moment().subtract(7, "days"))
    );

    this.projectDateMap.thisMonth = projects.filter(project =>
      moment(project.dateStart).isBetween(
        moment().subtract(1, "month"),
        moment().subtract(7, "days")
      )
    );

    this.projectDateMap.other = projects.filter(project =>
      moment(project.dateStart).isBefore(moment().subtract(1, "month"))
    );
  }

}
