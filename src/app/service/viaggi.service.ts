import { Itinerario } from './../model/itinerario.model';
import { Viaggio } from './../model/viaggio.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ViaggiService {

  constructor(private db: AngularFirestore) {}

  getListaViaggi() { 
    return this.db
    .collection("viaggi");
   // .snapshotChanges();
  }

  getListaViaggi2() { 
    return this.db
    .collection("viaggi", ref => ref.orderBy('dataInizio')).snapshotChanges();
  }

  getViaggioVChanges(id: string ) {
    var resDettaglio =  this.db
    .collection('viaggi')
    .doc(id)//.collection("Itinerario")
    .valueChanges();
    return resDettaglio;
  }
  // per recuperare il viaggi basta quella con ValueChanges
  getViaggioSnap(id: string ) {
    var listaItinerari :Itinerario[]= [];
    var resDettaglio =  this.db.collection('viaggi').doc(id).snapshotChanges();
    var resItinerario = this.db.collection('viaggi').doc(id).collection('Itinerario').snapshotChanges();
    console.log(resItinerario);
    resItinerario.subscribe(it => {
    it.forEach(element => {
      //listaItinerari.push(element.payload.doc.data);
       //console.log(element.payload.doc.data())
       //console.log(element.payload.doc.id)
    })
      // console.log(it.id)
      // console.log(it.payload.data())
   
    })
    return resDettaglio;
  }

  getAssicurazioneSnap(id:string){
    var res = this.db.collection('viaggi').doc(id).collection('Assicurazione').snapshotChanges();
    return res;
  }

  getNoteSnap(id:string){
    var res = this.db.collection('viaggi').doc(id).collection('Note').snapshotChanges();
    return res;
  }

  getItinerarioSnap(id:string){
    var res = this.db.collection('viaggi').doc(id).collection('Itinerario', ref => ref.orderBy('data')).snapshotChanges();
    return res;
  }

  getAlloggiSnap(idViaggio:string, idItinerario:string){
    var res = this.db.collection('viaggi').doc(idViaggio).collection('Itinerario').doc(idItinerario).collection('Alloggi').snapshotChanges();
    return res;
  }

  getTrasportiSnap(idViaggio:string, idItinerario:string){
    var res = this.db.collection('viaggi').doc(idViaggio).collection('Itinerario').doc(idItinerario).collection('Trasporti').snapshotChanges();
    return res;
  }

  getAttivitaSnap(idViaggio:string, idItinerario:string){
    var res = this.db.collection('viaggi').doc(idViaggio).collection('Itinerario').doc(idItinerario).collection('Attivita').snapshotChanges();
    return res;
  }

  createViaggio(viaggio: Viaggio) {
    return new Promise<any>((resolve, reject) =>{
      this.db
        .collection("viaggi")
        .add(viaggio)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }

  // deleteViaggio(viaggio) {
  //   return this.db
  //     .collection("viaggi")
  //     .doc(viaggio.id)
  //     .delete();
  // }
  
  // updateViaggio(viaggio: Viaggio, id) {
  //   return this.db
  //     .collection("viaggi")
  //     .doc(id)
  //     .update({
  //       name: viaggio.titolo,
  //       email: viaggio.descrizione,
  //       contact: viaggio.immagine
  //     });
  // }


}

