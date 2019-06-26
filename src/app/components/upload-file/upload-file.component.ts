import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Response} from "../../entities/Response";
import {Exception} from "../../entities/Exception";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  selectedFile: File = null;
  responseMessage:string;
  error: Exception;
  message: string;
  imgURL: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    if (event === null || event.length === 0) {
      return;
    }
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.imgURL = reader.result;
    };
    this.selectedFile = <File>event.target.files[0];
    this.responseMessage = null;
    this.message = null;
  }

  onUpload() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.httpClient.post('https://qr-generation-service.herokuapp.com/qr-code/read', fd)
      .subscribe((res: Response) => {
        console.log(res);
        if(res.status==='Success') {
          this.responseMessage = res.data.toString();
        }else {
          this.error = res.error;
          this.responseMessage = this.error.data.toString();
        }
      });
  }
}
