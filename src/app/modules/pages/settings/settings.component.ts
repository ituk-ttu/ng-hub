import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { AuthContext } from '../../../core/services/authContext';
import { MyDetailsHttpService } from '../../../core/services/my-details.http-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})

export class SettingsComponent implements OnInit {

  public user: User = {} as User;
  public newPasswordForm = new FormGroup({
      oldPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      newPasswordConfirmation: new FormControl('', Validators.required),
    },
    this.passwordMatchValidator
  );
  public sessions = this.myDetailsHttpService.getSessions();

  constructor(public authContext: AuthContext, public myDetailsHttpService: MyDetailsHttpService) {
  }

  passwordMatchValidator(frm: FormGroup) {

    console.log(frm.controls.newPassword.value === frm.controls.newPasswordConfirmation.value)
    return frm.controls.newPassword.value === frm.controls.newPasswordConfirmation.value ? null : { mismatch: true };
  }

  ngOnInit(): void {
    this.user = { ...this.authContext.user };
  }

  resetUser() {
    this.user = { ...this.authContext.user };
  }

  submitUser() {
    // TODO
  }

  submitNewPassword() {
    console.log(this.newPasswordForm.value);
    // TODO submit newPasswordForm.value
  }
}
