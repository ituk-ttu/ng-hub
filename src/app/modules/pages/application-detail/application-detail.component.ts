import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationHttpService } from '../../../core/http-services/application.http-service';
import { ApplicationModel } from '../../../shared/models/application.model';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.sass']
})
export class ApplicationDetailComponent implements OnInit {
  application: ApplicationModel;

  constructor(private route: ActivatedRoute, public applicationHttpService: ApplicationHttpService) {
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.applicationHttpService.getApplicationById(id).subscribe(e => {
      this.application = e;
    });
  }

  acceptApplication(id: number) {
    alert('Not implemented');
  }

  refuseApplication(id: number) {
    alert('Not implemented');
  }
}
