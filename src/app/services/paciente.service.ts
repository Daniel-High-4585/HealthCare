import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Paciente } from '../models/paciente';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private firestore: AngularFirestore) { }

  createPatient(patient: Paciente){
    return this.firestore.collection('paciente').add(patient);
  }

  getPatient(){
    return this.firestore.collection('paciente').snapshotChanges();
  }
}
