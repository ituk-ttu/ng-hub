import {ProjectSummary} from "./project-summary.model";

export class ProjectBudgetRow {
    id: number;
    projectSummary: ProjectSummary;
    description: string;
    itukCost: number;
    facultyCost: number;
}
