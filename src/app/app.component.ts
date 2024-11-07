import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Buscar Viajes', url: '/buscar-viajes', icon: 'search' },
    { title: 'Historial de Viajes', url: '/historial-viajes', icon: 'time' },
    { title: 'Perfil', url: '/perfil', icon: 'person' },
    { title: 'Mapa de Viajes', url: '/mapa-viajes', icon: 'map' },
  ];

  constructor() {}
}
