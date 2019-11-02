import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MyDetailsHttpService } from '../../../core/services/my-details.http-service';

@Component({
  selector: 'app-profile-pic-select',
  templateUrl: './profile-pic-select.component.html',
  styleUrls: ['./profile-pic-select.component.sass']
})
export class ProfilePicSelectComponent {
  @ViewChild('template', { static: true })
  picSelectTemplate: TemplateRef<any>;
  public modalRef: BsModalRef;
  @Input()
  public imageChangedEvent: any = '';
  @Input()
  public userId: number;
  public croppedImage: any = '';
  public showCropper;
  public showRestore = false;

  constructor(private modalService: BsModalService,
              private mentorHttpService: MyDetailsHttpService) {
  }


  public openModal() {
    this.modalRef = this.modalService.show(this.picSelectTemplate, {
      class: 'modal-md',
      ignoreBackdropClick: true,
      keyboard: false
    });
  }

  public closeModal() {
    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.modalRef = undefined;
    this.restore();
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
    this.closeModal();
    // TODO save
    // this.mentorHttpService.saveProfilePic(this.croppedImage).subscribe(
    // () => this.closeModal(),
    // () => console.log('Error saving image')
    // );
  }

  public preview(): void {
    this.showRestore = true;
    this.imageChangedEvent = this.croppedImage;
  }

  public restore(): void {
    this.showRestore = false;
    this.mentorHttpService.getMentorProfile(this.userId)
      .subscribe((response) => this.imageChangedEvent = 'data:image/png;base64,' + response.photo);
  }


  public imageLoaded(): void {
    // show cropper
  }

  public loadImageFailed(): void {
    // show message
  }
}
