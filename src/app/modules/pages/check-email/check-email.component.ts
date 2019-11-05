import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './check-email.component.html'
})
export class CheckEmailComponent {

  constructor(private router: Router) {
  }

  navigateToLogin() {
    this.router.navigate(['hub/auth']);
  }

}
