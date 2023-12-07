import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisClasePage } from './mis-clase.page';

const routes: Routes = [
  {
    path: '',
    component: MisClasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisClasePageRoutingModule {}
