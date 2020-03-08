import {User} from "./user.model";

export class GeneralMeetingParticipation {
  id: number;
  user: User;
  generalMeetingId: number;
  participated: boolean;
  mandatory: boolean;
}
