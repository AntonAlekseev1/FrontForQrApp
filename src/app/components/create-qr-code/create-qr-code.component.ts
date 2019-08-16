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
  imageUrlPrefix:string = "https://qr-generation-service.herokuapp.com/qr-code/get-qr-image/";
  imageUrl:string;
  toEmail: string;
  responseMessage: string;
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
      if (response.error === null) {
        this.responseMessage = response.data.toString();
        console.log(response.data.toString());
        alert(this.responseMessage.toString());
      } else {
        this.responseMessage = response.error.data.toString();
        console.log(response.error.data.toString());
        this.toEmail = prompt(response.error.data.toString() + ", please enter valid email");
        if (this.toEmail != null) {
          this.sendEmail();
        }
      }
    });
    this.toEmail = null;
    this.responseMessage = null;
  }
}
