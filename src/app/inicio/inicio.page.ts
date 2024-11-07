import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  userName: string = '';

  constructor(private menu: MenuController) {}

  ngOnInit() {
    // Obtener el nombre del usuario activo desde localStorage
    const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo') || '{}');
    this.userName = usuarioActivo.nombre || 'Usuario';
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}
