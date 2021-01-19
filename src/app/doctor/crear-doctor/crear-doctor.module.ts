import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearDoctorPageRoutingModule } from './crear-doctor-routing.module';

import { CrearDoctorPage } from './crear-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearDoctorPageRoutingModule
  ],
  declarations: [CrearDoctorPage]
})
export class CrearDoctorPageModule {}
