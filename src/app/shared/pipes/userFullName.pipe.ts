import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../models/user.model";

@Pipe({
  pure: true,
  name: 'fullname'
})
export class UserFullNamePipe implements PipeTransform {

  transform(user: User): string {
    return user.firstName + ' ' + user.lastName;
  }

}
