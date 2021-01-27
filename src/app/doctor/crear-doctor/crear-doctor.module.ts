import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CrearDoctorPageRoutingModule } from './crear-doctor-routing.module';

import { CrearDoctorPage } from './crear-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CrearDoctorPageRoutingModule
  ],
  declarations: [CrearDoctorPage]
})
export class CrearDoctorPageModule {}
