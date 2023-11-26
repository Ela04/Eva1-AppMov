import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicaPageRoutingModule } from './publica-routing.module';

import { PublicaPage } from './publica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicaPageRoutingModule
  ],
  declarations: [PublicaPage]
})
export class PublicaPageModule {}
