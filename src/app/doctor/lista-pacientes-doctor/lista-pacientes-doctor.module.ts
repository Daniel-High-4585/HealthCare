import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPacientesDoctorPageRoutingModule } from './lista-pacientes-doctor-routing.module';

import { ListaPacientesDoctorPage } from './lista-pacientes-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPacientesDoctorPageRoutingModule
  ],
  declarations: [ListaPacientesDoctorPage]
})
export class ListaPacientesDoctorPageModule {}
