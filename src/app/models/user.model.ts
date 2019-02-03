export class User {
    id: number;
    name: string;
    email: string;
    admin: boolean;
    archived: boolean;
    createdAt: string;
    updatedAt: string;
    telegram: string;
    canBeMentor: boolean;   // TODO: canBeMentor -> isMentor
}
