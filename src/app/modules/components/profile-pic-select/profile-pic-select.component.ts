import {Component, EventEmitter, Input, OnDestroy, Output, TemplateRef, ViewChild} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import {MentorProfilesHttpService} from '../../../core/http-services/mentor-profiles.http-service';

@Component({
  selector: 'app-profile-pic-select',
  templateUrl: './profile-pic-select.component.html',
  styleUrls: ['./profile-pic-select.component.sass']
})
export class ProfilePicSelectComponent {
  readonly PROFILE_PICTURE_SIZE: number = 350;
  readonly ASPECT_RATIO: number = 1;
  @ViewChild('template', { static: true })
  picSelectTemplate: TemplateRef<any>;
  public modalRef: BsModalRef;
  @Input()
  public imageChangedEvent: any = '';
  @Input()
  public mentorId: number;
  public croppedImage: string;
  public showCropper;
  public showRestore = false;
  @Output() imageSaved = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  constructor(private modalService: BsModalService,
              private mentorHttpService: MentorProfilesHttpService) {
  }


  public openModal() {
    this.mentorHttpService.getMentorProfilePic(this.mentorId)
      .subscribe((response) => {
        this.imageChangedEvent = response;
      });
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
    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.modalRef = undefined;
    this.imageSaved.emit(this.croppedImage);
  }

  public preview(): void {
    this.showRestore = true;
    this.imageChangedEvent = this.croppedImage;
  }

  public restore(): void {
    this.showRestore = false;
    this.mentorHttpService.getMentorProfilePic(this.mentorId)
      .subscribe((response) => {
        this.imageChangedEvent = response;
      });
  }

  public imageLoaded(): void {
    // show cropper
  }

  public loadImageFailed(): void {
    // show message
  }
}
