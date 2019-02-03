import {Component, EventEmitter, Input, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ImageCroppedEvent} from 'ngx-image-cropper';
import {MyDetailsHttpService} from '../../services/my-details.http-service';
import {AuthContext} from '../../services/authContext';

@Component({
  selector: 'app-profile-pic-select',
  templateUrl: './profile-pic-select.component.html',
  styleUrls: ['./profile-pic-select.component.css']
})
export class ProfilePicSelectComponent {
  @ViewChild('template')
  picSelectTemplate: TemplateRef<any>;
  public modalRef: BsModalRef;
  @Input()
  public imageChangedEvent: any = '';
  public croppedImage: any = '';
  public showCropper;

  constructor(private modalService: BsModalService,
              private mentorHttpService: MyDetailsHttpService,
              private authContext: AuthContext) {
  }


  public openModal() {
    this.modalRef = this.modalService.show(this.picSelectTemplate, {
      class: 'modal-lg',
      ignoreBackdropClick: true,
      keyboard: false
    });
  }

  public closeModal() {
    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.modalRef = undefined;
  }

  public fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.showCropper = true;
  }

  public imageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = event.base64;
  }

  public save(): void {
    this.imageChangedEvent = this.croppedImage;

    //this.mentorHttpService.saveProfilePic(this.croppedImage).subscribe(
     // () => this.closeModal(),
     // () => console.log('Error saving image')
   // );
  }

  public imageLoaded(): void {
    // show cropper
  }

  public loadImageFailed(): void {
    // show message
  }
}
