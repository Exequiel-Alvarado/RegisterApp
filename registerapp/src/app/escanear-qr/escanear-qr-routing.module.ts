import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscanearQRPage } from './escanear-qr.page';

const routes: Routes = [
  {
    path: '',
    component: EscanearQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscanearQRPageRoutingModule {}
