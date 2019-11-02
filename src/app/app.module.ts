import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule, CollapseModule, ModalModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatDialogModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    CoreModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    HomeModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
