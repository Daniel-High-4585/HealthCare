import { PacienteService } from './../../services/paciente.service';
import { Paciente } from './../../models/paciente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.page.html',
  styleUrls: ['./lista-pacientes.page.scss'],
})
export class ListaPacientesPage implements OnInit {

  public patient: Paciente[];

  constructor(private service: PacienteService) {
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

}
