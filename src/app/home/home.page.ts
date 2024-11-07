import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  correo: string = '';
  clave: string = '';

  constructor(private navCtrl: NavController, private authService: AuthService) {}

  iniciarSesion() {
    if (this.correo && this.clave) {
      const credenciales = { correo: this.correo, clave: this.clave };

      this.authService.login(credenciales).subscribe(
        (response) => {
          alert('Inicio de sesión exitoso');
          this.navCtrl.navigateForward('/inicio');
        },
        (error) => {
          alert('Error en el inicio de sesión: ' + error.message);
        }
      );
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  irARegistro() {
    this.navCtrl.navigateForward('/register');
  }

  irARecuperarPassword() {
    this.navCtrl.navigateForward('/recover-password');
  }
}
