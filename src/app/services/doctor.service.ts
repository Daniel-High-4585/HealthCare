import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private firestore: AngularFirestore) { }

  createDoctor(doctor: Doctor){
    return this.firestore.collection('doctor').add(doctor);
  }

  getDoctor(){
    return this.firestore.collection('doctor').snapshotChanges();
  }
}
