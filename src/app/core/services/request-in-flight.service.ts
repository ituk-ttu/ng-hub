import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RequestInFlightService {

  isAnyRequestInFlight = new BehaviorSubject(false);

  constructor() {
  }

  setNewState(state: boolean) {
    this.isAnyRequestInFlight.next(state);
  }

  getSubject() {
    return this.isAnyRequestInFlight;
  }
}
