import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthContext } from '../../../core/services/authContext';
import { Router } from '@angular/router';
import { Subscription } from "rxjs";
import { RequestInFlightService } from "../../../core/services/request-in-flight.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass']
})
export class ContainerComponent implements OnInit, OnDestroy {
  public navbarOpen = false;
  public showSpinner = false;
  private showSpinnerSubject: Subscription;

  constructor(public authContext: AuthContext,
              public router: Router,
              private requestInFlightService: RequestInFlightService) {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit(): void {
    this.showSpinnerSubject = this.requestInFlightService.getSubject()
      .subscribe(e => {
        console.log(e);
        this.showSpinner = e !== 0;
      });
  }

  ngOnDestroy(): void {
    this.showSpinnerSubject.unsubscribe();
  }
}
