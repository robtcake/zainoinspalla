import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaViaggiComponent } from './lista-viaggi/lista-viaggi.component';

import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DettaglioViaggioComponent } from './dettaglio-viaggio/dettaglio-viaggio.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaViaggiComponent,
    DettaglioViaggioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
