import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { RequestInFlightService } from '../services/request-in-flight.service';

@Injectable()
export class RequestFlightStateInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(private requestInFlightService: RequestInFlightService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.totalRequests++;
    this.requestInFlightService.setNewState(true);
    return next.handle(request).pipe(
      tap(res => {
        if (res instanceof HttpResponse) {
          this.decreaseRequests();
        }
      }),
      catchError((err) => {
        this.decreaseRequests();
        return throwError(err);
      })
    );
  }

  private decreaseRequests() {
    this.totalRequests--;
    if (this.totalRequests === 0) {
      this.requestInFlightService.setNewState(false);
    }
  }

}
