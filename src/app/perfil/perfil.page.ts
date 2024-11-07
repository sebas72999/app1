import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  nombre: string = '';
  edad: number | null = null;
  sexo: string = '';
  lugar: string = '';
  correo: string = '';
  clave: string = ''; // <-- Asegúrate de que esta propiedad esté declarada

  constructor(private navCtrl: NavController) {}

  ionViewWillEnter() {
    // Obtener el correo del usuario activo
    const usuarioActivo = localStorage.getItem('usuarioActivo');

    if (usuarioActivo) {
      // Obtener la lista de usuarios
      let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

      // Buscar el usuario activo
      const usuario = usuarios.find((u: any) => u.correo === usuarioActivo);

      if (usuario) {
        // Asignar los valores del usuario a los campos
        this.nombre = usuario.nombre;
        this.edad = usuario.edad;
        this.sexo = usuario.sexo;
        this.lugar = usuario.lugar;
        this.correo = usuario.correo;
        this.clave = usuario.clave; // <-- Asegúrate de que esta línea exista
      }
    }
  }

  guardarCambios() {
    // Obtener la lista de usuarios
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    // Buscar el índice del usuario activo
    const index = usuarios.findIndex((u: any) => u.correo === this.correo);

    if (index !== -1) {
      // Actualizar la información del usuario
      usuarios[index] = {
        nombre: this.nombre,
        edad: this.edad,
        sexo: this.sexo,
        lugar: this.lugar,
        correo: this.correo,
        clave: this.clave, // <-- Asegúrate de que esta línea esté incluida
      };

      // Guardar la lista de usuarios actualizada en localStorage
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      alert('Perfil actualizado exitosamente.');
    }
  }
}
