import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(public authService: AuthService, private router: Router) {}

  onLogout(){
    this.authService.logout();
  }
  // Botones para redirigir a una pagina

  btnListaP(){// lista de pacientes
    this.router.navigateByUrl('/lista-pacientes');
  }

  btnListaD(){// lista de doctores
    this.router.navigateByUrl('/lista-doctor');
  }

  btnMisP(){// lista de mis pacientes
    this.router.navigateByUrl('/lista-pacientes-doctor');
  }

  btncrearP(){// Crear paciente
    this.router.navigateByUrl('/crear-paciente');
  }
  btncrearD(){// Crear doctor
    this.router.navigateByUrl('/crear-doctor');
  }
  btnReg(){// Crear doctor
    this.router.navigateByUrl('/register');
  }
}
