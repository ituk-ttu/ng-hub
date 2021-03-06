export class User {
  id: number;

  firstName: string;
  lastName: string;
  personalCode: string;
  email: string;

  curriculum: string;
  studentCode: string;

  iban: string;
  cardNumber: number;

  role: string;
  archived: boolean;
  mentor: boolean;

  status: Status;
  updatedAt: Date;
  createdAt: Date;

}

export class Status {
  id: number;
  statusName: string;
  description: string;
}
