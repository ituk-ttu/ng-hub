import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RequestInFlightService {

  isAnyRequestInFlight = new BehaviorSubject(0);

  constructor(private http: HttpClient) {
  }

  setNewState(state: number) {
    this.isAnyRequestInFlight.next(this.isAnyRequestInFlight.getValue() + state);
  }

  getSubject() {
   return this.isAnyRequestInFlight;
  }

}
