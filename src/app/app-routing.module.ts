import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
=======
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {path: "register", 
  loadChildren: ()=> import('./register/register.module').then(m => m.RegisterPageModule)},
  {
>>>>>>> a6ab70689d48b0c270b86ac72d2928ef578a17be
    path: 'crear-paciente',
    loadChildren: () => import('./paciente/crear-paciente/crear-paciente.module').then( m => m.CrearPacientePageModule)
  },
  {
    path: 'crear-doctor',
    loadChildren: () => import('./doctor/crear-doctor/crear-doctor.module').then( m => m.CrearDoctorPageModule)
  },
  {
    path: 'lista-pacientes-doctor',
    loadChildren: () => import('./doctor/lista-pacientes-doctor/lista-pacientes-doctor.module').then( m => m.ListaPacientesDoctorPageModule)
  },
  {
    path: 'lista-pacientes',
    loadChildren: () => import('./paciente/lista-pacientes/lista-pacientes.module').then( m => m.ListaPacientesPageModule)
  },
  {
    path: 'editar-paciente',
    loadChildren: () => import('./paciente/editar-paciente/editar-paciente.module').then( m => m.EditarPacientePageModule)
  },
  {
    path: 'editar-doctor',
    loadChildren: () => import('./doctor/editar-doctor/editar-doctor.module').then( m => m.EditarDoctorPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
<<<<<<< HEAD
=======
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
>>>>>>> a6ab70689d48b0c270b86ac72d2928ef578a17be
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
