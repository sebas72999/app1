import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage {
  correo: string = '';
  successMsg: string = '';
  errorMsg: string = '';

  constructor(private authService: AuthService) {}

  recuperarContrasena() {
    if (this.correo) {
      this.authService.recoverPassword(this.correo).subscribe(
        (response) => {
          this.successMsg = 'Revisa tu correo para restablecer la contraseña';
          this.errorMsg = ''; // Limpiar el mensaje de error
        },
        (error) => {
          this.errorMsg = 'Error al recuperar la contraseña: ' + error.message;
          this.successMsg = ''; // Limpiar el mensaje de éxito
        }
      );
    } else {
      this.errorMsg = 'Por favor, ingresa tu correo electrónico';
      this.successMsg = ''; // Limpiar el mensaje de éxito
    }
  }
}
