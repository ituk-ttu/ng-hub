import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './modules/pages/landingpage/landing-page.component';
import { MentorsComponent } from './modules/pages/mentors/mentors.component';
import { SettingsComponent } from './modules/pages/settings/settings.component';
import { UsersComponent } from './modules/pages/users/users.component';
import { MyMentorProfileComponent } from './modules/pages/my-mentor-profile/my-mentor-profile.component';
import { AuthComponent } from './modules/pages/auth/auth.component';
import { AuthGuard } from './core/config/auth-guard';
import { ApplicationsComponent } from './modules/pages/applications/applications.component';
import { RecoverPasswordComponent } from './modules/pages/recover-password/recover-password.component';
import { DoorPermissionsComponent } from './modules/pages/door-permissions/door-permissions.component';
import { UserDetailViewComponent } from './modules/pages/user-detail-view/user-detail-view.component';
import { ContainerComponent } from './modules/components/authenticated-container/container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'hub', component: LandingPageComponent },
      { path: 'hub/users', component: UsersComponent },
      { path: 'hub/users/:id', component: UserDetailViewComponent },
      { path: 'hub/mentors', component: MentorsComponent },
      { path: 'hub/mentors/profile/:id', component: MyMentorProfileComponent },
      { path: 'hub/settings', component: SettingsComponent },
      { path: 'hub/settings/mentor', component: MyMentorProfileComponent },
      { path: 'hub/applications', component: ApplicationsComponent},
      { path: 'hub/door-permissions', component: DoorPermissionsComponent},
      { path: 'hub/**', redirectTo: 'hub', pathMatch: 'full' }
    ]
  },
  { path: 'hub/auth', component: AuthComponent },
  { path: 'hub/recover', component: RecoverPasswordComponent },
  { path: '**', redirectTo: 'hub/auth', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
