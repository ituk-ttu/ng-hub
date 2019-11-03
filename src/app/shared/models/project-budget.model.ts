import {Project} from './project.model';
import {ProjectBudgetRow} from './project-budget-row.model';

export class ProjectBudget {
    id: number;
    project: Project;
    rows: ProjectBudgetRow[];
}
