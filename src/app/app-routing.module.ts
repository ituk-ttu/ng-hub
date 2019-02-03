import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HubComponent} from './components/hub/hub.component';
import {MentorsComponent} from './components/mentors/mentors.component';
import {SettingsComponent} from './components/settings/settings.component';
import {UsersComponent} from './components/users/users.component';
import {MyMentorProfileComponent} from './components/my-mentor-profile/my-mentor-profile.component';
import {AuthComponent} from './components/auth/auth.component';
import {AuthGuard} from './config/auth-guard';
import {ApplicationsComponent} from './components/applications/applications.component';
import {RecoverPasswordComponent} from './components/recover-password/recover-password.component';
import {DoorPermissionsComponent} from './components/door-permissions/door-permissions.component';
import {UserDetailViewComponent} from "./components/user-detail-view/user-detail-view.component";

const routes: Routes = [
    {path: 'hub', component: HubComponent, canActivate: [AuthGuard]},
    {path: 'hub/auth', component: AuthComponent},
    {path: 'hub/users', component: UsersComponent, canActivate: [AuthGuard]},
    {path: 'hub/users/:id', component: UserDetailViewComponent, canActivate: [AuthGuard]},
    {path: 'hub/recover', component: RecoverPasswordComponent},
    {path: 'hub/mentors', component: MentorsComponent, canActivate: [AuthGuard]},
    {path: 'hub/settings', component: SettingsComponent, canActivate: [AuthGuard]},
    {path: 'hub/settings/mentor', component: MyMentorProfileComponent, canActivate: [AuthGuard]},
    {path: 'hub/applications', component: ApplicationsComponent, canActivate: [AuthGuard]},
    {path: 'hub/door-permissions', component: DoorPermissionsComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'hub', pathMatch: 'full', canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
