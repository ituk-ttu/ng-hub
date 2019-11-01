import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-door-permissions',
  templateUrl: './door-permissions.component.html'
})
export class DoorPermissionsComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }


  ngOnInit() {
    this.spinner.show();
    setTimeout(function() {
      this.spinner.hide();
    }, 10000);
  }
}
