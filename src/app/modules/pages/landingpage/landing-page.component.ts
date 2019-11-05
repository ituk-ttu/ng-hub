import { Component } from '@angular/core';
import { ResourcesHttpService } from '../../../core/services/resources.http-service';
import { AuthContext } from '../../../core/services/authContext';
import { FormControl, FormGroup } from '@angular/forms';
import { ResourcesContentModel } from '../../../shared/models/resources-content.model';

@Component({
  templateUrl: './landing-page.component.html'
})

export class LandingPageComponent {
  public resources = this.resourcesService.getResources();
  public activeId;
  public resourceFrom: FormGroup;
  public newItemFormActive = false;

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
      name: new FormControl(),
      comment: new FormControl(),
      url: new FormControl()
    });
  }

  setEditActive(resource: ResourcesContentModel) {
    this.newItemFormActive = false;
    this.activeId = resource.id;
    this.resourceFrom.addControl('id', new FormControl());
    this.resourceFrom.setValue({
      id: resource.id,
      name: resource.name,
      comment: resource.comment,
      url: resource.url
    });
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  onSubmit() {
    this.newItemFormActive = false;
    this.resourcesService.saveResource(this.resourceFrom.value)
      .subscribe(() => {
        this.resources = this.resourcesService.getResources();
        delete this.activeId;
      });
  }

  trackByFn(index, item) {
    return item.id;
  }

  toggleNewLinkForm() {
    this.resourceFrom = this.createFormGroup();
    this.newItemFormActive = !this.newItemFormActive;
    delete this.activeId;
  }

  hideInputForm() {
    this.newItemFormActive = false;
    delete this.activeId;
  }

  deleteResource(id: number) {
    this.resourcesService.deleteResource(id).subscribe(
      () => {
        this.resources = this.resourcesService.getResources();
      }
    );
  }
}

