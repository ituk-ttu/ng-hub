import { Component } from '@angular/core';
import { AuthContext } from '../../../core/services/authContext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass']
})
export class ContainerComponent {
  navbarOpen = false;

  constructor(public authContext: AuthContext,
              public router: Router) {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
