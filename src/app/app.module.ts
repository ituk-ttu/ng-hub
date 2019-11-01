import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HubComponent } from './components/hub/hub.component';
import { MentorsComponent } from './components/mentors/mentors.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { UsersComponent } from './components/users/users.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MyMentorProfileComponent } from './components/my-mentor-profile/my-mentor-profile.component';
import { ProfilePicSelectComponent } from './components/profile-pic-select/profile-pic-select.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { UserHttpService } from './services/user.http-service';
import { MyDetailsHttpService } from './services/my-details.http-service';
import { BsDropdownModule, CollapseModule, ModalModule } from 'ngx-bootstrap';
import { ResourcesHttpService } from './services/resources.http-service';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MentorProfilesHttpService } from './services/mentor-profiles.http-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { httpInterceptorProviders } from './interceptor';
import { AuthContext } from './services/authContext';
import { AuthComponent } from './components/auth/auth.component';
import { CookieModule } from 'ngx-cookie';
import { AuthGuard } from './config/auth-guard';
import { ApplicationsComponent } from './components/applications/applications.component';
import { ApplicationHttpService } from './services/application.http-service';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { DoorPermissionsComponent } from './components/door-permissions/door-permissions.component';
import { UserDetailViewComponent } from './components/user-detail-view/user-detail-view.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HubComponent,
    MentorsComponent,
    SpinnerComponent,
    UsersComponent,
    SettingsComponent,
    MyMentorProfileComponent,
    ProfilePicSelectComponent,
    AuthComponent,
    ApplicationsComponent,
    RecoverPasswordComponent,
    DoorPermissionsComponent,
    UserDetailViewComponent,
  ],
  imports: [
    CookieModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    ImageCropperModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [
    AuthGuard,
    UserHttpService,
    MyDetailsHttpService,
    ResourcesHttpService,
    MentorProfilesHttpService,
    httpInterceptorProviders,
    ApplicationHttpService,
    AuthContext],
  bootstrap: [AppComponent]
})
export class AppModule {

}
