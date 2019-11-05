import { Component } from '@angular/core';
import { UserHttpService } from "../../../core/services/user.http-service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html'
})
export class RecoverPasswordComponent {

  public email = '';

  constructor(private userHttpService: UserHttpService, private router: Router) {
  }

  sendNewPasswordToEmail() {
    this.userHttpService.sendNewPasswordToEmail(this.email)
      .subscribe(() => {
        this.router.navigate(['hub/check-email']);
      }, () => {
        this.router.navigate(['hub/check-email']);
      });
  }
}
