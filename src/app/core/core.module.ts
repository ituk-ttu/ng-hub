import { ModuleWithProviders, NgModule } from '@angular/core';
import { ApplicationHttpService } from './services/application.http-service';
import { MentorProfilesHttpService } from './services/mentor-profiles.http-service';
import { ResourcesHttpService } from './services/resources.http-service';
import { MyDetailsHttpService } from './services/my-details.http-service';
import { UserHttpService } from './services/user.http-service';
import { AuthContext } from './services/authContext';
import { AuthGuard } from './config/auth-guard';
import { httpInterceptorProviders } from './interceptor';
import {LoadingService} from './services/loading-service';

@NgModule({
  providers: [
    AuthGuard,
    UserHttpService,
    MyDetailsHttpService,
    ResourcesHttpService,
    MentorProfilesHttpService,
    httpInterceptorProviders,
    ApplicationHttpService,
    AuthContext],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
    };
  }
}
