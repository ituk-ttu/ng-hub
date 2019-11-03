import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RequestInFlightService } from '../services/request-in-flight.service';

@Injectable()
export class RequestFlightStateInterceptor implements HttpInterceptor {

  constructor(private requestInFlightService: RequestInFlightService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requestInFlightService.setNewState(1);
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.requestInFlightService.setNewState(-1);
        }
        return event;
      }),
      catchError((error) => {
        this.requestInFlightService.setNewState(-1);
        return throwError(error);
      }));
  }

}
