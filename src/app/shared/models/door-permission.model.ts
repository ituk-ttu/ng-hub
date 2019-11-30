import {DoorModel} from "./door.model";

export class DoorPermissionModel {
    id: number;
    userId: number;
    door: DoorModel[];
}