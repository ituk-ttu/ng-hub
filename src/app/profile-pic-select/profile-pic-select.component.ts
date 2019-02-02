import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ImageCroppedEvent} from 'ngx-image-cropper';

@Component({
  selector: 'app-profile-pic-select',
  templateUrl: './profile-pic-select.component.html',
  styleUrls: ['./profile-pic-select.component.css']
})
export class ProfilePicSelectComponent implements OnInit {
  @ViewChild('template')
  picSelectTemplate: TemplateRef<any>;
  public modalRef: BsModalRef;
  public imagePath;
  public imgURL: any;
  public message: string;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  public showCropper;

  constructor(private modalService: BsModalService) {
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

  ngOnInit() {
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.showCropper = true;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  loadImageFailed() {
    // show message
  }
}
