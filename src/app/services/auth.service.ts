import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Doctor } from '../models/doctor';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /*
  public isLogged: any = false;
  constructor(public afAuth: AngularFireAuth, private afsAuth: AngularFireAuth) {
    afAuth.authState.subscribe(doctor => (this.isLogged = doctor));*/

    constructor(private AFauth: AngularFireAuth, private router: Router){

    }
    login(email:string, password:string){
      
      return new Promise((resolve, rejected) =>{
        this.AFauth.signInWithEmailAndPassword(email,password).then(user =>{
          resolve(user);  
        }).catch(err => rejected(err));
      });
      
    }
    logout(){
      this.AFauth.signOut().then(() =>{
        this.router.navigate(['/login'])
      });
    }
   }

   /*
   async onReggister(doctor: Doctor){
     try{
       return await this.afAuth.createUserWithEmailAndPassword(
         doctor.email,
         doctor.pass
       );
     } catch (error){
       console.log("Error al registrar", error)
     }
   }
  */
 /*
   async onLogin(doctor: Doctor){
     try{
       return await this.afAuth.signInWithEmailAndPassword(
         doctor.email,
         doctor.pass
       );
     } catch (error) {
       console.log('Error al ingresar', error);
     }
   }

}
*/
