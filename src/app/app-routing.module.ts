import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HubComponent} from './components/hub/hub.component';
import {MentorsComponent} from './components/mentors/mentors.component';
import {SettingsComponent} from './components/settings/settings.component';
import {UsersComponent} from './components/users/users.component';
import {MyMentorProfileComponent} from './components/my-mentor-profile/my-mentor-profile.component';
import {AuthComponent} from './components/auth/auth.component';

const routes: Routes = [
  {path: 'hub', component: HubComponent},
  {path: 'hub/auth', component: AuthComponent},
  {path: 'hub/mentors', component: MentorsComponent},
  {path: 'hub/users', component: UsersComponent},
  {path: 'hub/mentors', component: MentorsComponent},
  {path: 'hub/settings', component: SettingsComponent},
  {path: 'hub/settings/mentor', component: MyMentorProfileComponent},
  {path: '**', redirectTo: '/hub', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
