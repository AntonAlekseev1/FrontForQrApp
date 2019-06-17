import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = 'http://localhost:8080/email/send';

  constructor(private httpClient: HttpClient) {
  }

  sendEmail(toEmail:string, id: string) {
    const fd = new FormData();
    fd.append('toEmail', toEmail);
    fd.append('qrCodeId', id);
    fd.append('file', null);
    return this.httpClient.post(this.url, fd);
  }
}
