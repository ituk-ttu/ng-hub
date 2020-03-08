import {User} from './user.model';
import {ProjectSummary} from './project-summary.model';

export class Project {
    id: number;
    title: string;
    dateStart: string; // Date
    dateEnd: string; // Date
    description: string;
    projectLead: User;
    summary: ProjectSummary;
}
