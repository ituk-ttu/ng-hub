import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubComponent } from './components/hub/hub.component';
import { MentorsComponent } from './components/mentors/mentors.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UsersComponent } from './components/users/users.component';
import { MyMentorProfileComponent } from './components/my-mentor-profile/my-mentor-profile.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './config/auth-guard';
import { ApplicationsComponent } from './components/applications/applications.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { DoorPermissionsComponent } from './components/door-permissions/door-permissions.component';
import { UserDetailViewComponent } from './components/user-detail-view/user-detail-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'hub', component: HubComponent },
      { path: 'hub/users', component: UsersComponent },
      { path: 'hub/users/:id', component: UserDetailViewComponent },
      { path: 'hub/mentors', component: MentorsComponent },
      { path: 'hub/settings', component: SettingsComponent },
      { path: 'hub/settings/mentor', component: MyMentorProfileComponent },
      { path: 'hub/applications', component: ApplicationsComponent},
      { path: 'hub/door-permissions', component: DoorPermissionsComponent},
      { path: 'hub/**', redirectTo: 'hub', pathMatch: 'full' }
    ]
  },
  { path: 'hub/auth', component: AuthComponent },
  { path: 'hub/recover', component: RecoverPasswordComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
