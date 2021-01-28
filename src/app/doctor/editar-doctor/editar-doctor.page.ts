import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from "@ionic/angular"
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-editar-doctor',
  templateUrl: './editar-doctor.page.html',
  styleUrls: ['./editar-doctor.page.scss'],
})
export class EditarDoctorPage implements OnInit {

  public myForm:FormGroup;
  public doctor: Doctor;

  constructor(private service: DoctorService,
    private actroute: ActivatedRoute,
    private router: Router,
    private toast: ToastController,
    private fb:FormBuilder,
    private studentService:DoctorService) { 

      this.actroute.queryParams.subscribe(//Función árbol, afectan el ambito de las variables
        params => {
          if(params && params.special){
            this.doctor = JSON.parse(params.special) as Doctor;
            console.log(this.doctor);
          }
        }
      );
    }

  ngOnInit() {this.myForm = this.fb.group({
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
      this.service.createDoctor(this.doctor);
    }


}
