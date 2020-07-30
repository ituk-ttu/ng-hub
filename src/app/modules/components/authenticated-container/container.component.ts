import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthContext } from '../../../core/services/authContext';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestInFlightService } from '../../../core/services/request-in-flight.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass']
})
export class ContainerComponent implements OnInit, OnDestroy {
  public navbarOpen = undefined;
  public showSpinner;
  private showSpinnerSubject: Subscription;

  constructor(public authContext: AuthContext,
              public router: Router,
              private requestInFlightService: RequestInFlightService,
              private cdRef: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.showSpinnerSubject = this.requestInFlightService.getSubject()
      .subscribe(e => {
        this.showSpinner = e;
        this.cdRef.detectChanges();
      });
  }

  public toggleNavbar() {
    const isMobile = navigator.userAgent.match(
        /(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i);
    if (isMobile) {
      this.navbarOpen = !this.navbarOpen;
    } else {
      this.router.navigate([`hub/`])
    }
  }

  ngOnDestroy(): void {
    this.showSpinnerSubject.unsubscribe();
  }
}
