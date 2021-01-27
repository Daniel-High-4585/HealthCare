import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
<<<<<<< HEAD
=======
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
>>>>>>> a6ab70689d48b0c270b86ac72d2928ef578a17be

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
            AngularFireModule.initializeApp(environment.firebaseConfig),
<<<<<<< HEAD
            AngularFireDatabaseModule],
=======
            AngularFireDatabaseModule,
            AngularFireAuthModule,],
>>>>>>> a6ab70689d48b0c270b86ac72d2928ef578a17be
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
<<<<<<< HEAD
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
=======
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFirestore
>>>>>>> a6ab70689d48b0c270b86ac72d2928ef578a17be
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
