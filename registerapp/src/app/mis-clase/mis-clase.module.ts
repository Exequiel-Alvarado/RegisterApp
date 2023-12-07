import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisClasePageRoutingModule } from './mis-clase-routing.module';

import { MisClasePage } from './mis-clase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisClasePageRoutingModule
  ],
  declarations: [MisClasePage]
})
export class MisClasePageModule {}
