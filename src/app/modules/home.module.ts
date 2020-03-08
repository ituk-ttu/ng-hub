import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LandingPageComponent } from './pages/landingpage/landing-page.component';
import { MentorsComponent } from './pages/mentors/mentors.component';
import { UsersComponent } from './pages/users/users.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { MentorProfileComponent } from './pages/mentor-profile/mentor-profile.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { DoorPermissionsComponent } from './pages/door-permissions/door-permissions.component';
import { UserDetailViewComponent } from './pages/user-detail-view/user-detail-view.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from '../app.component';
import { ContainerComponent } from './components/authenticated-container/container.component';
import { ProfilePicSelectComponent } from './components/profile-pic-select/profile-pic-select.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { BsDropdownModule } from 'ngx-bootstrap';
import { BooleanSelectorComponent } from './components/boolean-selector/boolean-selector.component';
import { GeneralMeetingsComponent } from './pages/general-meetings/general-meetings.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { UserSettingsBlockComponent } from './components/user-settings-block/user-settings-block.component';
import { CheckEmailComponent } from './pages/check-email/check-email.component';
import { MentorCardComponent } from './components/mentor-card/mentor-card.component';
import { SharedModule } from '../shared/shared.module';
import { DoorBulkAddComponent } from './pages/door-bulk-add/door-bulk-add.component';
import { ApplicationDetailComponent } from './pages/application-detail/application-detail.component';
import { UserDoorPermissionsBlockComponent } from './components/user-door-permissions-block/user-door-permissions-block.component';
import { UserPasswordChangeBlockComponent } from './components/user-password-change-block/user-password-change-block.component';
import {EventDurationPipe} from "../core/pipes/event-duration.pipe";
import {DatePipe} from "@angular/common";
import {GeneralMeetingParticipationComponent} from "./pages/general-meetings/participation-bulk-add/general-meeting-participation.component";
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { UserSelectComponent } from './components/user-select/user-select.component';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MAT_DATE_LOCALE, MatDatepickerModule, MatSlideToggleModule} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ImageCropperModule,
    SharedModule,
    BsDropdownModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSlideToggleModule
  ],
  declarations: [
    GeneralMeetingsComponent,
    GeneralMeetingParticipationComponent,
    CheckEmailComponent,
    AppComponent,
    ContainerComponent,
    ProfilePicSelectComponent,
    EventDurationPipe,
    LandingPageComponent,
    MentorsComponent,
    SpinnerComponent,
    UserSettingsBlockComponent,
    UsersComponent,
    SettingsComponent,
    MentorProfileComponent,
    AuthComponent,
    ApplicationsComponent,
    RecoverPasswordComponent,
    DoorPermissionsComponent,
    UserDetailViewComponent,
    BooleanSelectorComponent,
    ProjectsComponent,
    MentorCardComponent,
    DoorBulkAddComponent,
    ApplicationDetailComponent,
    ProjectCardComponent,
    UserSelectComponent,
    UserDoorPermissionsBlockComponent,
    UserPasswordChangeBlockComponent,
  ],
  providers: [
    DatePipe,
    {provide: MAT_DATE_LOCALE, useValue: 'et-EE'}
  ]
})
export class HomeModule {
}
