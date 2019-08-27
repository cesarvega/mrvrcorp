import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FieldConfig2 } from '../../field.interface';
import { ToastrService } from 'ngx-toastr';
import { PDFDocumentProxy } from 'pdfjs-dist';
import * as XLSX from 'xlsx';
const { read, write, utils } = XLSX;
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
  file: File;
  
  arrayBuffer: any;
  @ViewChild('video', { static: false })
  public video: ElementRef;

  @ViewChild('canvas', { static: false })
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

  incomingfile(event): void {
    this.file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      const data = new Uint8Array(this.arrayBuffer);
      const arr = new Array();
      for (let i = 0; i !== data.length; ++i) {
        arr[i] = String.fromCharCode(data[i]);
      }
      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, { type: 'binary' });
      // tslint:disable-next-line:variable-name
      const first_sheet_name = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
    };
    fileReader.readAsArrayBuffer(this.file);
  }

  selected(imageResult: any): void {
    const bstr: string = imageResult.dataURL;
    const wbb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
    const wsname: string = wbb.SheetNames[0];
    const ws: XLSX.WorkSheet = wbb.Sheets[wsname];

    const reader: FileReader = new FileReader();
    // reader.readAsText(imageResult.dataURL);
    reader.onload = (e) => {
      const res = reader.result as string; // This variable contains your file as text
      const lines = res.split('\n'); // Splits you file into lines
      const ids = [];
      lines.forEach((line) => {
        ids.push(line.split(',')[0]); // Get first item of line
      });
      console.log(ids);
    };

    reader.readAsDataURL(imageResult.data);
    // const wb: XLSX.WorkBook = XLSX.read(imageResult, {type: 'array'});
    // if (this.imageCounter > this.maxAmountofFiles || this.pictures.length >= this.maxAmountofFiles - 1) {
    //   this.toastr.warning('Please select max 3 files.');
    // } else {
    //   this.src = imageResult.resized
    //     && imageResult.resized.dataURL
    //     || imageResult.dataURL;
    //   if (imageResult.file.size > 2097152) {
    //     this.toastr.warning('File is too big! maximun size is 2Mb');
    //   } else {
    //     this._FileUploadService.postInfo(imageResult.file).subscribe(x => {
    //       const docId = x[0].docId;
    //       if (imageResult.file.type === 'application/pdf') {
    //         this.pictureData = { data: imageResult.dataURL, name: imageResult.file.name, format: imageResult.file.type, docId: docId };
    //       } else {
    //         this.pictureData = { data: imageResult.resized.dataURL, name: imageResult.file.name, format: imageResult.file.type, docId: docId };
    //       }
    //       this.imageCounter = this.imageCounter + 1;
    //       this.pictures.push(this.pictureData);
    //     });

    //   }
    // }
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

