import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent implements OnInit {
  public showing = false;

  constructor(private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.spinner.show();
    this.showing = true;
    setTimeout(() => {
      this.spinner.hide();
      this.showing = false;
    }, 5000);
  }
}
