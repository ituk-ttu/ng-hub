import {DoorModel} from './door.model';

export class UserDoorPermissionModel {
    id: number;
    doors: DoorModel[];
    firstName: string;
    lastName: string;
    cardNumber: string;
}