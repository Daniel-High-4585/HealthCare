import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDoctorPageRoutingModule } from './lista-doctor-routing.module';

import { ListaDoctorPage } from './lista-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDoctorPageRoutingModule
  ],
  declarations: [ListaDoctorPage]
})
export class ListaDoctorPageModule {}
