import { ApplicationStatus } from './application-status.enum';
import { User } from "./user.model";


export class ApplicationModel {
  createdAt: string;
  email: string;
  id: number;
  mentor: User;
  name: string;
  personalCode: string;
  processedById: number;
  status: ApplicationStatus;
  studentCode: string;
  updatedAt: string;
}
