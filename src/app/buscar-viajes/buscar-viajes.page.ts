import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-buscar-viajes',
  templateUrl: './buscar-viajes.page.html',
  styleUrls: ['./buscar-viajes.page.scss'],  // Asegúrate de que esté bien escrito
})

export class BuscarViajesPage implements OnInit{

  destino: string = '';  // Variable para el destino seleccionado
  fecha: string = '';    // Variable para la fecha seleccionada

  // Lista de comunas de Santiago de Chile
  comunas = [
    'Cerrillos', 'Cerro Navia', 'Conchalí', 'El Bosque', 'Estación Central', 'Huechuraba', 
    'Independencia', 'La Cisterna', 'La Florida', 'La Granja', 'La Pintana', 'La Reina', 
    'Las Condes', 'Lo Barnechea', 'Lo Espejo', 'Lo Prado', 'Macul', 'Maipú', 'Ñuñoa', 
    'Pedro Aguirre Cerda', 'Peñalolén', 'Providencia', 'Pudahuel', 'Quilicura', 'Quinta Normal', 
    'Recoleta', 'Renca', 'San Joaquín', 'San Miguel', 'San Ramón', 'Santiago', 'Vitacura'
  ];

  constructor(private menu: MenuController) {}

  buscarViajes() {
    // Verificamos que el destino y la fecha estén seleccionados
    if (this.destino && this.fecha) {
      alert(`Buscando viajes a ${this.destino} el ${this.fecha}`);
      console.log(`Buscando viajes a ${this.destino} el ${this.fecha}`);
    } else {
      alert('Por favor, selecciona un destino y una fecha');
    }
  }
  ngOnInit(): void {
      
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}

