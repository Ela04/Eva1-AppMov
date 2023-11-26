import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivadaPageRoutingModule } from './privada-routing.module';

import { PrivadaPage } from './privada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivadaPageRoutingModule
  ],
  declarations: [PrivadaPage]
})
export class PrivadaPageModule {}
