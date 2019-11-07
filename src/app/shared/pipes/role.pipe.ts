import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  pure: true,
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(value: any): any {
    if (value === 'ADMIN') {
      return 'Administraator';
    }
    if (value === 'BOARD') {
      return 'Juhatuse liige';
    }
    if (value === 'MENTOR') {
      return 'Mentor';
    }
    return 'Liige';

  }

}
