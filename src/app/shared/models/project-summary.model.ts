import {User} from './user.model';
import {Project} from './project.model';
import {ProjectMember} from "./project-member.model";
import {ProjectBudgetRow} from "./project-budget-row.model";

export class ProjectSummary {
    id: number;
    createdAt: string; // Date
    positiveSummary: string;
    negativeSummary: string;
    project: Project;
    createdBy: User;
    confirmedBy: User;
    members: ProjectMember[];
    budgetRows: ProjectBudgetRow[];
}
