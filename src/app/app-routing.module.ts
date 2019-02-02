import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HubComponent} from './components/hub/hub.component';
import {MentorsComponent} from './components/mentors/mentors.component';
import {SettingsComponent} from './components/settings/settings.component';
import {UsersComponent} from './components/users/users.component';
import {MyMentorProfileComponent} from './components/my-mentor-profile/my-mentor-profile.component';

// TODO replace settings/mentor with settings/mentor{id}
// TODO rename components - remove "Component" from name
const routes: Routes = [
  {path: 'hub', component: HubComponent},
  {path: 'mentors', component: MentorsComponent},
  {path: 'setting', component: SettingsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'mentors', component: MentorsComponent},
  {path: 'settings/mentor', component: MyMentorProfileComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
