import { Component, OnInit } from '@angular/core';
import {CreateQrCodeService} from "./create-qr-code.service";
import {QrCode} from "../../entities/QrCode";
import {Response} from "../../entities/Response";

@Component({
  selector: 'app-create-qr-code',
  templateUrl: './create-qr-code.component.html',
  styleUrls: ['./create-qr-code.component.css']
})
export class CreateQrCodeComponent implements OnInit {

  response: Response = new Response();
  qrCode: QrCode;
  qrCodeId: string;
  imageUrlPrefix:string = "http://localhost:8080/qr-code/get-qr-image/";
  imageUrl:string;
  constructor(private service: CreateQrCodeService) {
    this.qrCode = new QrCode();
  }

  ngOnInit() {
  }

  createQrCode() {
    this.service.createQrCode(this.qrCode).subscribe((response: Response)=>{
      this.response = response;
      this.qrCodeId = response.data.toString();
      this.imageUrl = this.imageUrlPrefix+this.qrCodeId;
    });
    this.imageUrl = null;
  }

}
