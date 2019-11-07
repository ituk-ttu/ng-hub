import { NgModule } from '@angular/core';
import { RolePipe } from './pipes/role.pipe';

@NgModule({
  declarations: [
    RolePipe
  ],
  exports: [
    RolePipe
  ]
})
export class SharedModule {
}
