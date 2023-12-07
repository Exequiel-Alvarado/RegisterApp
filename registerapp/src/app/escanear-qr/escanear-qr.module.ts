import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscanearQRPageRoutingModule } from './escanear-qr-routing.module';

import { EscanearQRPage } from './escanear-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscanearQRPageRoutingModule
  ],
  declarations: [EscanearQRPage]
})
export class EscanearQRPageModule {}
