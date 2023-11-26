import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicaPage } from './publica.page';

const routes: Routes = [
  {
    path: '',
    component: PublicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicaPageRoutingModule {}
