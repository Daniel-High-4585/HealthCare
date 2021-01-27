import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { DoctorService} from '../../services/doctor.service';
import { Doctor} from '../../models/doctor';

@Component({
  selector: 'app-crear-doctor',
  templateUrl: './crear-doctor.page.html',
  styleUrls: ['./crear-doctor.page.scss'],
})
export class CrearDoctorPage implements OnInit {

  public myForm: FormGroup;
  public doctor: Doctor;

  constructor(private doctorService: DoctorService, private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.compose([Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.minLength(3)])],
      age: [0, Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
      active: [false, Validators.required],
      patient: ['']
    });
  }

  create(){
    this.doctor = {
      name: this.myForm.controls.name.value,
      lastName: this.myForm.controls.lastName.value,
      age: this.myForm.controls.age.value,
      email: this.myForm.controls.email.value,
      pass: this.myForm.controls.pass.value,
      active: this.myForm.controls.active.value,
      patient: ['']
    };
    this.doctorService.createDoctor(this.doctor);
  }
}
