import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-mapa-viajes',
  templateUrl: './mapa-viajes.page.html',
  styleUrls: ['./mapa-viajes.page.scss'],
})
export class MapaViajesPage implements OnInit {

  mapOptions: any;
  currentLocationMarker!: L.Marker; // Solo L.Marker, no nulo
  private map!: L.Map; // Instancia del mapa

  constructor() {
    this.requestLocationPermission();
  }

  async requestLocationPermission() {
    const perm = await Geolocation.requestPermissions();
    if (perm.location === 'granted') {
      this.getCurrentLocation();
      this.watchPosition();
    } else {
      console.error('Permiso de ubicación no concedido');
    }
  }

  async getCurrentLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Coordenadas obtenidas:', coordinates); // Verificar coordenadas
      this.initializeMap(coordinates.coords.latitude, coordinates.coords.longitude);
    } catch (error) {
      console.error('Error obteniendo la ubicación:', error);
    }
  }

  watchPosition() {
    Geolocation.watchPosition({}, (position: any, err: any) => {
      if (position) {
        const newLatLng: [number, number] = [position.coords.latitude, position.coords.longitude];
        this.currentLocationMarker.setLatLng(newLatLng);// Actualiza el marcador
      } else {
        console.error('Error viendo la posición:', err);
      }
    });
  }

  initializeMap(lat: number, lng: number) {
    this.mapOptions = {
      center: L.latLng(lat, lng),
      zoom: 15,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        })
      ]
    };

    // Crear el mapa
    this.map = L.map('map', this.mapOptions);

    // Añadir el marcador
    this.currentLocationMarker = L.marker([lat, lng])
      .bindPopup('Mi ubicación actual')
      .addTo(this.map); // Agregar el marcador directamente al mapa
  }

  ngOnInit() {}
}
