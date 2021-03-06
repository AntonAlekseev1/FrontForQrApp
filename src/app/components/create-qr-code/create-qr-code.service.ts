import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {QrCode} from "../../entities/QrCode";

@Injectable({
  providedIn: 'root'
})
export class CreateQrCodeService {

  private url = 'https://qr-generation-service.herokuapp.com/qr-code/create';

  constructor(private httpClient: HttpClient) {
  }

  createQrCode(qrCode: QrCode) {
    const body = {message: qrCode.message, fileSize: qrCode.fileSize};
    return this.httpClient.post(this.url, body)
  }
}
