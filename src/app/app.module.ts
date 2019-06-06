import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateQrCodeComponent} from './components/create-qr-code/create-qr-code.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CreateQrCodeService} from "./components/create-qr-code/create-qr-code.service";
import { UploadFileComponent } from './components/upload-file/upload-file.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateQrCodeComponent,
    UploadFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AppComponent,
    CreateQrCodeComponent,
    CreateQrCodeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
