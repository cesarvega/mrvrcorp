import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FieldConfig2 } from '../../field.interface';
import { ToastrService } from 'ngx-toastr';
import { PDFDocumentProxy } from 'pdfjs-dist';

import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import { FileUploadService } from './file-upload-service.service';
@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  field: FieldConfig2;

  group: FormGroup;
  constructor(private toastr: ToastrService, private _FileUploadService: FileUploadService
  ) {
    this.captures = [];

  }
  public resizeOptions: ResizeOptions = {
    resizeMaxHeight: 128 * 2,
    resizeMaxWidth: 128 * 2
  };
  src = '';
  pictureData;
  imageToShow;
  imageCounter = 0;
  selectedFile = null;
  selectedFiles: Array<any> = [];
  fileToUpload: File = null;
  pictures: Array<any> = [];
  maxAmountofFiles = 4;
  @ViewChild('video', {static: false})
  public video: ElementRef;

  @ViewChild('canvas', {static: false})
  public canvas: ElementRef;

  public captures: Array<any>;

  ngOnInit(): void {

    if (this.hasGetUserMedia()) {
      const x = '';
    } else {
      this.toastr.warning('getUserMedia() is not supported by your browser');
    }
    const userName = localStorage.getItem('userName');
    this._FileUploadService.getDocuments(userName).subscribe(data => {
      data.d.forEach(base64 => {
        const result = 'data:image/jpeg;base64,' + base64.image;
        this.pictureData = { data: result, name: base64.name, format: base64.type, docId: base64.docId };
        this.pictures.push(this.pictureData);
        this.imageCounter = this.imageCounter + 1;
      });
    });
  }

  selected(imageResult: ImageResult): void {
    if (this.imageCounter > this.maxAmountofFiles || this.pictures.length >= this.maxAmountofFiles - 1) {
      this.toastr.warning('Please select max 3 files.');
    } else {
      this.src = imageResult.resized
        && imageResult.resized.dataURL
        || imageResult.dataURL;
      if (imageResult.file.size > 2097152) {
        this.toastr.warning('File is too big! maximun size is 2Mb');
      } else {
        this._FileUploadService.postInfo(imageResult.file).subscribe(x => {
          const docId = x[0].docId;
          if (imageResult.file.type === 'application/pdf') {
            this.pictureData = { data: imageResult.dataURL, name: imageResult.file.name, format: imageResult.file.type, docId: docId };
          } else {
            this.pictureData = { data: imageResult.resized.dataURL, name: imageResult.file.name, format: imageResult.file.type, docId: docId };
          }
          this.imageCounter = this.imageCounter + 1;
          this.pictures.push(this.pictureData);
        });

      }
    }
  }

  deleteDocument(index, docId): any {
    this._FileUploadService.deleteDocument(docId).subscribe(x => {
      this.pictures.splice(index, 1);
    });
  }

  hasGetUserMedia(): any {
    return !!(navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia);
  }

  callBackFn(pdf: PDFDocumentProxy): void {
    // do anything with "pdf"
    const x = pdf;
  }

}

