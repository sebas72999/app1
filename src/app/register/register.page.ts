import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  nombre: string = '';
  lugar: string = '';
  correo: string = '';
  clave: string = '';
  errorMsg: string = '';

  constructor(private navCtrl: NavController, private authService: AuthService) {}

  registrarUsuario() {
    if (this.nombre && this.lugar && this.correo && this.clave) {
      const nuevoUsuario = {
        nombre: this.nombre,
        lugar: this.lugar,
        correo: this.correo,
        clave: this.clave,
      };

      this.authService.register(nuevoUsuario).subscribe(
        (response) => {
          alert('Registro exitoso.');
          this.navCtrl.navigateForward('/home');
        },
        (error) => {
          this.errorMsg = 'Error en el registro: ' + error.message;
        }
      );
    } else {
      this.errorMsg = 'Por favor, completa todos los campos.';
    }
  }
}
