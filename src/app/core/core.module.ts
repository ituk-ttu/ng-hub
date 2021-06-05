import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthContext } from './services/authContext';
import { AuthGuard } from './guards/auth-guard';
import { httpInterceptorProviders } from './interceptors';
import { RequestInFlightService } from './services/request-in-flight.service';
import { UserHttpService } from './http-services/user.http-service';
import { MyDetailsHttpService } from './http-services/my-details.http-service';
import { ResourcesHttpService } from './http-services/resources.http-service';
import { MentorProfilesHttpService } from './http-services/mentor-profiles.http-service';
import { GeneralMeetingsHttpService } from './http-services/general-meetings.http-service';
import { ApplicationHttpService } from './http-services/application.http-service';

@NgModule({
  providers: [
    AuthGuard,
    UserHttpService,
    MyDetailsHttpService,
    RequestInFlightService,
    ResourcesHttpService,
    MentorProfilesHttpService,
    EventsHttpService,
    BirthdaysHttpService,
    httpInterceptorProviders,
    ApplicationHttpService,
    GeneralMeetingsHttpService,
    ProjectHttpService,
    AuthContext],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
    };
  }
}
