import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPacientesDoctorPage } from './lista-pacientes-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPacientesDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPacientesDoctorPageRoutingModule {}
