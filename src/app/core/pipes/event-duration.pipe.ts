import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'eventDuration'
})
export class EventDurationPipe implements PipeTransform {

  constructor(public datePipe: DatePipe) {}

  transform(startDate: any, endDate: any): any {
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start.getDate() === end.getDate()) {
      const startTime = this.datePipe.transform(start, 'HH:mm');
      const endTime = this.datePipe.transform(end, 'HH:mm');
      return `${startTime} - ${endTime}`;
    }
    const shortStartDate = this.datePipe.transform(start, 'shortDate');
    const shortEndDate = this.datePipe.transform(end, 'shortDate');
    return `${shortStartDate} - ${shortEndDate}`;
  }

}
