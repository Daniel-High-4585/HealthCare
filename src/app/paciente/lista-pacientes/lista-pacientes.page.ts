import { PacienteService } from './../../services/paciente.service';
import { Paciente } from './../../models/paciente';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from "@angular/router"

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.page.html',
  styleUrls: ['./lista-pacientes.page.scss'],
})
export class ListaPacientesPage implements OnInit {

  public patient: Paciente[];

  constructor(private service: PacienteService, private router: Router) {
    this.service.getPatient().subscribe(data =>{
      this.patient = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Paciente
        };
      });
    });
   }

  ngOnInit() {
  }

  detail(doctor: Paciente){
    let navext: NavigationExtras={
      queryParams:{
        special: JSON.stringify(doctor)
      }
    };
    this.router.navigate(['/editar-paciente'],navext);
  }

}
