import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateQrCodeComponent} from "./components/create-qr-code/create-qr-code.component";
import {UploadFileComponent} from "./components/upload-file/upload-file.component";

const routes: Routes = [
  {path: 'createQr', component: CreateQrCodeComponent},
  {path: 'uploadFile', component: UploadFileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
