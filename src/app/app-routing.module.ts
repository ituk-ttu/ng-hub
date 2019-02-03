import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HubComponent} from './components/hub/hub.component';
import {MentorsComponent} from './components/mentors/mentors.component';
import {SettingsComponent} from './components/settings/settings.component';
import {UsersComponent} from './components/users/users.component';
import {MyMentorProfileComponent} from './components/my-mentor-profile/my-mentor-profile.component';
import {AuthComponent} from './components/auth/auth.component';
import {AuthGuard} from './config/auth-guard';

const routes: Routes = [
  {path: 'hub/auth', component: AuthComponent},
  {path: 'hub', component: HubComponent, canActivate: [AuthGuard]},
  {path: 'hub/mentors', component: MentorsComponent, canActivate: [AuthGuard]},
  {path: 'hub/users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'hub/mentors', component: MentorsComponent, canActivate: [AuthGuard]},
  {path: 'hub/settings', component: SettingsComponent, canActivate: [AuthGuard]},
  {path: 'hub/settings/mentor', component: MyMentorProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
