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
import { ProjectSummaryComponent } from './pages/project-summary/project-summary.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ImageCropperModule,
    BsDropdownModule,
  ],
  declarations: [
    GeneralMeetingsComponent,
    AppComponent,
    ContainerComponent,
    ProfilePicSelectComponent,
    LandingPageComponent,
    MentorsComponent,
    SpinnerComponent,
    UsersComponent,
    SettingsComponent,
    MentorProfileComponent,
    AuthComponent,
    ApplicationsComponent,
    RecoverPasswordComponent,
    DoorPermissionsComponent,
    UserDetailViewComponent,
    BooleanSelectorComponent,
    ProjectSummaryComponent
  ]

})
export class HomeModule {
}
