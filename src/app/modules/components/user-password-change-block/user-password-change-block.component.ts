import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../shared/models/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthContext} from '../../../core/services/authContext';
import {MyDetailsHttpService} from '../../../core/http-services/my-details.http-service';

@Component({
    selector: 'app-user-passowrd-change-block',
    templateUrl: './user-password-change-block.component.html',
    styleUrls: ['./user-password-change-block.component.css']
})
export class UserPasswordChangeBlockComponent implements OnInit {
    @Input()
    private userId: number;

    public passwordChangeSuccessful = true;
    public user: User = {} as User;
    public newPasswordForm = new FormGroup({
            oldPassword: new FormControl('', Validators.required),
            newPassword: new FormControl('', Validators.required),
            newPasswordConfirmation: new FormControl('', Validators.required),
        },
        this.passwordMatchValidator
    );
    public sessions = this.myDetailsHttpService.getSessions();

    constructor(public authContext: AuthContext,
                public myDetailsHttpService: MyDetailsHttpService,
    ) {
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.newPasswordForm.controls;
    }

    passwordMatchValidator(frm: FormGroup) {
        return frm.controls.newPassword.value === frm.controls.newPasswordConfirmation.value ? null : {mismatch: true};
    }

    ngOnInit(): void {
        this.user = {...this.authContext.user};
    }

    submitNewPassword() {
        console.log(this.newPasswordForm.value);
        this.myDetailsHttpService.updatePassword(this.authContext.user.id, this.newPasswordForm.value)
            .subscribe(() => {
                this.passwordChangeSuccessful = true;
            }, () => {
                this.passwordChangeSuccessful = false;
                setTimeout(() => this.passwordChangeSuccessful = true, 3000);
            });
    }

}
