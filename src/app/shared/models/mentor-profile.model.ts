import { User } from './user.model';

export class MentorProfileModel {
  curriculum: string;
  enabled: boolean;
  gif: string;
  id: number;
  picture: string;
  quote: string;
  text: string;
  name: string;
  user: User;
}
