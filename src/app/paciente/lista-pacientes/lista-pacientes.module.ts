import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPacientesPageRoutingModule } from './lista-pacientes-routing.module';

import { ListaPacientesPage } from './lista-pacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPacientesPageRoutingModule
  ],
  declarations: [ListaPacientesPage]
})
export class ListaPacientesPageModule {}
