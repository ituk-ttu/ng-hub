import {User} from './user.model';
import {Project} from './project.model';

export class ProjectMember {
    id: number;
    project: Project;
    user: User;
    name: string;
}
