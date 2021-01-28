import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.page.html',
  styleUrls: ['./crear-paciente.page.scss'],
})
export class CrearPacientePage implements OnInit {

  public myForm: FormGroup;
  public patient: Paciente;
  constructor(private patientService: PacienteService, private fb: FormBuilder) { }

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
    this.patient = {
      name: this.myForm.controls.name.value,
      lastName: this.myForm.controls.lastName.value,
      age: this.myForm.controls.age.value,
      height: this.myForm.controls.height.value,
      weight: this.myForm.controls.weight.value,
      blood: this.myForm.controls.blood.value,
      doctor: this.myForm.controls.doctor.value,
      notes: this.myForm.controls.notes.value// convertir esto a array
    };
    this.patientService.createPatient(this.patient).then( res =>{
      alert('El paciente se a generado con exito');
    }).catch(err => alert('Error, no se puedo generar el registro'))
  }

}
