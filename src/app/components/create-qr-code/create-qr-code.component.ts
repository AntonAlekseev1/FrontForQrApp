import { Component, OnInit } from '@angular/core';
import {CreateQrCodeService} from "./create-qr-code.service";
import {QrCode} from "../../entities/QrCode";
import {Response} from "../../entities/Response";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-qr-code',
  templateUrl: './create-qr-code.component.html',
  styleUrls: ['./create-qr-code.component.css']
})
export class CreateQrCodeComponent implements OnInit {

  response: Response = new Response();
  qrCode: QrCode;
  qrCodeId: string;
  constructor(private service: CreateQrCodeService, private router: Router) {
    this.qrCode = new QrCode();
  }

  ngOnInit() {
  }

  createQrCode() {
    this.service.createQrCode(this.qrCode).subscribe((response: Response)=>{
      this.response = response;
      this.qrCodeId = response.data.toString();
    })
  }

}
