import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearDoctorPage } from './crear-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: CrearDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearDoctorPageRoutingModule {}
