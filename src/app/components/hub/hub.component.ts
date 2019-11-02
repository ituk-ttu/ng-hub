import { Component } from '@angular/core';
import { ResourcesHttpService } from '../../services/resources.http-service';
import { AuthContext } from '../../services/authContext';
import { FormControl, FormGroup } from '@angular/forms';
import { ResourcesContentModel } from '../../models/resources-content.model';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html'
})

export class HubComponent {
  public resources = this.resourcesService.getResources();
  public activeId;
  resourceFrom: FormGroup;

  constructor(private resourcesService: ResourcesHttpService,
              public auth: AuthContext) {
    this.resourceFrom = this.createFormGroup();
  }

  private copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  createFormGroup() {
    return new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      comment: new FormControl(),
      url: new FormControl()
    });
  }

  setEditActive(resource: ResourcesContentModel) {
    this.activeId = resource.id;
    this.resourceFrom.setValue({
      id: resource.id,
      name: resource.name,
      comment: resource.comment,
      url: resource.url
    });
  }

  onSubmit() {
    this.resourcesService.saveResource(this.resourceFrom.value).subscribe(() => {
      delete this.activeId;
    });
  }

}

