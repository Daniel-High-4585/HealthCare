import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService }from '../../services/doctor.service';
@Component({
  selector: 'app-lista-doctor',
  templateUrl: './lista-doctor.page.html',
  styleUrls: ['./lista-doctor.page.scss'],
})
export class ListaDoctorPage implements OnInit {

  public doctor: Doctor[];

  constructor(private service: DoctorService) {
    this.service.getDoctor().subscribe(data => {
      this.doctor = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Doctor
        };
      });
    });
  }

  ngOnInit() {
  }

}
