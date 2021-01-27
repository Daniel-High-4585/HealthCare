import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Doctor } from '../../models/doctor';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  doctor: Doctor = new Doctor();
  constructor(private router: Router, private authSvc: AuthService, private alertCtrl: AlertController,
    private authService: AuthService) { }

  ngOnInit() {
  }
  async onLogin(){
    const user = await this.authSvc.onLogin(this.doctor);
    if (this.doctor) {
      console.log('Ingreso exitoso');
      this.router.navigateByUrl('/home');
    } else {
      const alert = await this.alertCtrl.create({
        header: "Datos incorrectos",
        message: "Correo y/o contraseña incorrectos",
        buttons: [
          {
            text: "salir",
          }
        ]
      });
      await alert.present();
    }
  }

  onLoginRedirect(): void {
    this.router.navigate(['/home']);
  }

}
