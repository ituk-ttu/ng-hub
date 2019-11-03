import {User} from './user.model';
import {ProjectBudget} from './project-budget.model';
import {ProjectSummary} from './project-summary.model';

export class Project {
    id: number;
    title: string;
    dateStart: string; // Date
    dateEnd: string; // Date
    description: string;
    projectLead: User;
    members: User[];
    budget: ProjectBudget;
    summary: ProjectSummary;
}
