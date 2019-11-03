export class User {
  id: number;

  firstName: string;
  lastName: string;
  idCode: string;
  email: string;

  curriculum: string;
  studentCode: string;

  iban: string;
  cardNumber: number;

  role: string;
  archived: boolean;

  status: Status;
  updatedAt: Date;
  createdAt: Date;

}

export class Status {
  id: number;
  statusName: string;
  description: string;
}
