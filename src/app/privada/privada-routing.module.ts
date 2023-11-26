import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivadaPage } from './privada.page';

const routes: Routes = [
  {
    path: '',
    component: PrivadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivadaPageRoutingModule {}
