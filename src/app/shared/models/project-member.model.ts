import {User} from './user.model';
import {ProjectSummary} from "./project-summary.model";

export class ProjectMember {
    id: number;
    projectSummary: ProjectSummary;
    user: User;
    name: string;
}
