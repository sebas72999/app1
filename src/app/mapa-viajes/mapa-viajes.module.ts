import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapaViajesPageRoutingModule } from './mapa-viajes-routing.module';
import { MapaViajesPage } from './mapa-viajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeafletModule,  // Importación de LeafletModule aquí
    MapaViajesPageRoutingModule
  ],
  declarations: [MapaViajesPage]
})
export class MapaViajesPageModule { }
