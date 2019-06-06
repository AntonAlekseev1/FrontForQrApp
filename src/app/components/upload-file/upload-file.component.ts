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
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.httpClient.post('http://localhost:8080/qr-code/read', fd)
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
