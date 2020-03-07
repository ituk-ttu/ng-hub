import {Component, OnInit} from '@angular/core';
import {ProjectHttpService} from '../../../core/http-services/project.http-service';
import * as moment from 'moment';
import {Project} from '../../../shared/models/project.model';
import {FormControl, FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import {AuthContext} from '../../../core/services/authContext';


@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  projectDateMap = {thisWeek: [], thisMonth: [], other: []};
  editProjectForm: FormGroup;
  private isEditFormViewActive = false;
  private selectedProject: string;

  constructor(public projectHttpService: ProjectHttpService, private fb: FormBuilder, public auth: AuthContext) {
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
    return this.fb.group({
      title: [project ? project.title : null, Validators.required],
      multiDayEvent: [''],
      projectLead: [project ? project.projectLead : null, Validators.required],
      dateStart: [project ? project.dateStart : null, Validators.required],
      dateEnd: [project ? project.dateEnd : null],
      description: [project ? project.description : null, Validators.required],
      positiveSummary: [project ? project.summary.positiveSummary : null],
      negativeSummary: [project ? project.summary.negativeSummary : null],
      members: this.fb.array([
          this.fb.control(project ? project.members : null)
      ]),
      budgetRows: this.fb.array([
        this.createBudgetRow()
      ]),
    });
  }

  get members() {
    return this.editProjectForm.get('members') as FormArray;
  }

  createMember(): FormGroup {
    return this.fb.group({
      user: null,
      name: ''
    });
  }

  addMember(): void {
    this.members.push(this.createMember());
  }

  get budgetRows() {
    return this.editProjectForm.get('budgetRows') as FormArray;
  }

  createBudgetRow(): FormGroup {
    return this.fb.group({
      description: '',
      itukCost: '',
      facultyCost: ''
    });
  }

  addBudgetRow(): void {
    this.budgetRows.push(this.createBudgetRow());
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
      moment(project.dateStart).isAfter(moment().subtract(7, 'days'))
    );

    this.projectDateMap.thisMonth = projects.filter(project =>
      moment(project.dateStart).isBetween(
        moment().subtract(1, 'month'),
        moment().subtract(7, 'days')
      )
    );

    this.projectDateMap.other = projects.filter(project =>
      moment(project.dateStart).isBefore(moment().subtract(1, 'month'))
    );
  }




}
