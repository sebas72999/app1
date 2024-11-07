import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaViajesPage } from './mapa-viajes.page';

const routes: Routes = [
  {
    path: '',
    component: MapaViajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaViajesPageRoutingModule {}
