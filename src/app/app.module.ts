import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HubComponent} from './components/hub/hub.component';
import {MentorsComponent} from './components/mentors/mentors.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {UsersComponent} from './components/users/users.component';
import {SettingsComponent} from './components/settings/settings.component';
import {MyMentorProfileComponent} from './components/my-mentor-profile/my-mentor-profile.component';
import {UserHttpService} from './services/user.http-service';
import {MyDetailsHttpService} from './services/my-details.http-service';
import {ResourcesHttpService} from "./services/resources.http-service";

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
  ],
  imports: [
    HttpClientModule,
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserHttpService, MyDetailsHttpService, ResourcesHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
