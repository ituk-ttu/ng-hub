import { NgModule } from '@angular/core';
import { RolePipe } from './pipes/role.pipe';
import {UserFullNamePipe} from "./pipes/userFullName.pipe";

@NgModule({
  declarations: [
    RolePipe,
    UserFullNamePipe
  ],
  exports: [
    RolePipe,
    UserFullNamePipe
  ]
})
export class SharedModule {
}
