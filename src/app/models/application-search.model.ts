import {MentorProfileModel} from './mentor-profile.model';
import {ApplicationStatus} from './application-status.enum';


export class ApplicationModel {
  createdAt: string;
  email: string;
  id: number;
  mentor: string;
  mentorId: number;
  name: string;
  personalCode: string;
  processedById: number;
  studentCode: string;
  updatedAt: string;
}
