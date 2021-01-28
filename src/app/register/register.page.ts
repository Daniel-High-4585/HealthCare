import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  doctor: Doctor = new Doctor();
  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onRegister(){
    const user = await this.authSvc.onReggister(this.doctor);
    if (user){
      console.log('Usuario creado con éxito');
      this.router.navigateByUrl('/home');
    }
  }
}
