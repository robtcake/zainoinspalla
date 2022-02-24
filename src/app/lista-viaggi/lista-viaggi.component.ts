import { ViaggiService } from './../service/viaggi.service';
import { Component, OnInit } from '@angular/core';
import { Viaggio } from '../model/viaggio.model';
import { ViaggioDTO } from '../model/viaggio-dto.model';

@Component({
  selector: 'app-lista-viaggi',
  templateUrl: './lista-viaggi.component.html',
  styleUrls: ['./lista-viaggi.component.css']
})
export class ListaViaggiComponent implements OnInit {

  listaViaggi: ViaggioDTO[] = [];
  constructor(private viaggiService: ViaggiService) { }

  ngOnInit(): void {

this.viaggiService.getListaViaggi2().subscribe(res => {
  this.listaViaggi= [];
  this.listaViaggi = res.map(e=>{
    return {
      id: e.payload.doc.id, 
      vi: e.payload.doc.data()
    } as ViaggioDTO;
  })
  this.listaViaggi = this.listaViaggi.filter(x=> x.vi?.pubblicato == true )
 // this.listaViaggi.sort((a,b) => (a.vi?.dataInizio < b.vi?.dataInizio) ? 1 : ((b.vi?.dataInizio < a.vi?.dataInizio) ? -1 : 0)) // ho spostato il sort per dataInizio nel service
//https://stackoverflow.com/questions/46900430/firestore-getting-documents-id-from-collection
  
  });
  }

//https://www.youtube.com/watch?v=k204K2mJHfk How To Query a Firestore Collection using AngularFire
      // this.viaggiService.getListaViaggi().valueChanges().subscribe(
      //   item => {
      //     this.listaViaggi= [];
      //     item.forEach(element => {
      //       this.listaViaggi.push(element as Viaggio);
      //       console.log(element)
      //     })
      //   });
  }

// problema undefined grafico
// https://stackoverflow.com/questions/54884488/how-can-i-solve-the-error-ts2532-object-is-possibly-undefined/58401023#58401023 