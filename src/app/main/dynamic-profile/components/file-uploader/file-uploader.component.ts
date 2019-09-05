import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FieldConfig2 } from '../../field.interface';
import { ToastrService } from 'ngx-toastr';
import { PDFDocumentProxy } from 'pdfjs-dist';
import * as XLSX from 'xlsx';
const { read, write, utils } = XLSX;
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import { FileUploadService } from './file-upload-service.service';
import { NameRulesService } from 'app/main/name-rules/name-rules.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  field: FieldConfig2;

  group: FormGroup;
  constructor(private toastr: ToastrService,
              private _FileUploadService: FileUploadService,
              private _nameRuleService: NameRulesService
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
  projectid;

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
  // for xcell only
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
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      const projectID = 'TEST_RICARDO';
      const rationales = [];
      const wordparts = [];
      jsonData.forEach(x => {
        const temp = Object.values(x);
        rationales.push(temp[0]);
        wordparts.push(temp[1]);
      });
      Object.values(jsonData[0]);
      this._nameRuleService.addRationalesAndWordParts(rationales.toString(), wordparts.join('|')).subscribe(res => {
        console.log(res);
      });
    };
    fileReader.readAsArrayBuffer(this.file);
  }
  // for pdf and images
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

