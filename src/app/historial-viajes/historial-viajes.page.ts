import { Component } from '@angular/core';

@Component({
  selector: 'app-historial-viajes',
  templateUrl: './historial-viajes.page.html',
  styleUrls: ['./historial-viajes.page.scss'],
})
export class HistorialViajesPage {

  historialViajes = [
    { destino: 'Santiago', fecha: '01/09/2024' },
    { destino: 'Valparaíso', fecha: '15/09/2024' }
  ];

  constructor() {}
}

