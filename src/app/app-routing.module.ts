import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TestGuard } from './guards/test.guard';

const routes: Routes = [
  { path: '', redirectTo: 'ingresar', pathMatch: 'full' },
  {
    path: 'ingresar',
    loadChildren: () =>
      import('./ingresar/ingresar.module').then((m) => m.IngresarPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canActivate: [TestGuard],
  },
  {
    path: 'restablecer',
    loadChildren: () =>
      import('./restablecer/restablecer.module').then(
        (m) => m.RestablecerPageModule
      ),
  },
  {
    path: 'privada',
    canActivate: [TestGuard],
    loadChildren: () =>
      import('./privada/privada.module').then((m) => m.PrivadaPageModule),
  },
  {
    path: 'camara',
    loadChildren: () =>
      import('./camara/camara.module').then((m) => m.CamaraPageModule),
    canActivate: [TestGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
