import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDoctorPage } from './lista-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDoctorPageRoutingModule {}
