import {User} from './user.model';
import {Project} from './project.model';

export class ProjectSummary {
    id: number;
    createdAt: string; // Date
    positiveSummary: string;
    negativeSummary: string;
    project: Project;
    createdBy: User;
    confirmedBy: User;
}
