import { Component, OnInit } from '@angular/core';
import {CreateQrCodeService} from "./create-qr-code.service";
import {QrCode} from "../../entities/QrCode";
import {Response} from "../../entities/Response";
import {EmailService} from "../email/email.service";

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
  toEmail: string;
  constructor(private service: CreateQrCodeService, private emailService: EmailService) {
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

  sendEmail() {
    this.emailService.sendEmail(this.toEmail, this.qrCodeId).subscribe((response: Response)=>{
      this.response = response;
      console.log(response.data.toString())
    });
    this.toEmail = null;
  }
}
