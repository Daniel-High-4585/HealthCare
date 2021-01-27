import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPacientePageRoutingModule } from './crear-paciente-routing.module';

import { CrearPacientePage } from './crear-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CrearPacientePageRoutingModule
  ],
  declarations: [CrearPacientePage]
})
export class CrearPacientePageModule {}
