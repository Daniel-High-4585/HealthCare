import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from "@ionic/angular"
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Paciente } from '../../models/paciente';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.page.html',
  styleUrls: ['./editar-paciente.page.scss'],
})
export class EditarPacientePage implements OnInit {

  public myForm:FormGroup;
  public paciente: Paciente;

  constructor(private service: PacienteService,
    private actroute: ActivatedRoute,
    private router: Router,
    private toast: ToastController,
    private fb:FormBuilder,
    private patientService:PacienteService) { 

      this.actroute.queryParams.subscribe(//Función árbol, afectan el ambito de las variables
        params => {
          if(params && params.special){
            this.paciente = JSON.parse(params.special) as Paciente;
            console.log(this.paciente);
          }
        }
      );
    }

  ngOnInit() {

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [0, Validators.required],
      height: [0.0, Validators.required],
      weight: [0.0, Validators.required],
      blood: [''],
      doctor: [''],
      notes: ['', Validators.required]
    });
  }

  create(){
    this.paciente = {
      name: this.myForm.controls.name.value,
      lastName: this.myForm.controls.lastName.value,
      age: this.myForm.controls.age.value,
      height: this.myForm.controls.height.value,
      weight: this.myForm.controls.weight.value,
      blood: this.myForm.controls.blood.value,
      doctor: this.myForm.controls.doctor.value,
      notes: this.myForm.controls.notes.value// convertir esto a array
    };
    this.patientService.createPatient(this.paciente);
  }

}
