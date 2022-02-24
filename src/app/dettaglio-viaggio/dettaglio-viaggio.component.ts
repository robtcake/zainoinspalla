import { NoteViaggio } from './../model/note-viaggio.model';
import { Assicurazione } from './../model/assicurazione.model';
import { Attivita } from './../model/attivita.model';
import { Trasporti } from './../model/trasporti.model';
import { Alloggio } from './../model/alloggio.model';
import { Itinerario } from './../model/itinerario.model';
import { ViaggiService } from './../service/viaggi.service';
import { Component, OnInit } from '@angular/core';
import { ViaggiareSicuriFarnesina, Viaggio } from '../model/viaggio.model';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { StimaCosti } from '../model/stimaCosti.model';


@Component({
  selector: 'app-dettaglio-viaggio',
  templateUrl: './dettaglio-viaggio.component.html',
  styleUrls: ['./dettaglio-viaggio.component.css']
})

export class DettaglioViaggioComponent implements OnInit {

  viaggioRef: Viaggio | undefined;
  listaAssicurazioni: Assicurazione[] = [];
  listaNote: NoteViaggio[] = [];
  listaItinerari: Itinerario[] = [];
  listaCosti: StimaCosti[] = [];
  totaleCosti : number = 0;
  listaVS: ViaggiareSicuriFarnesina[] = [];



  constructor(private viaggiService: ViaggiService, private act: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    
    const id = this.act.snapshot.paramMap.get('id') || ""; // perchè può tornare null, cosa che non deve fare
    

    // recupero i dati del viaggio
    this.viaggiService.getViaggioVChanges(id).subscribe(res => {
      this.viaggioRef = res as Viaggio; 
      if(this.viaggioRef.percorsoMapsEmbed){
        let percorsoMaps = '<div class="mapEmbed" > '+this.viaggioRef.percorsoMapsEmbed+' </div>'; //https://stackoverflow.com/questions/57572943/force-innerhtml-content-to-fit-inside-div-width
        this.viaggioRef.percorsoMapsEmbed = this.sanitizer.bypassSecurityTrustHtml(percorsoMaps);
      }

      this.listaVS = [];
      let index = 0; //nel caso di più stati: assumo che salvo tante bandiere quanti link viaggiare sicuri, nello stesso ordine.
      this.viaggioRef.viaggiareSicuri.forEach(element => {
        let vs: ViaggiareSicuriFarnesina = {
          bandiera : "",
          link: ""
        };
        vs.link = this.sanitizer.bypassSecurityTrustUrl(element); // https://angular.io/guide/security#xss - Trusting safe values
        vs.bandiera = this.viaggioRef?.bandiere[index];
        this.listaVS.push(vs);
        index++;
      });
    })

    // this.viaggiService.getViaggioSnap(id).subscribe(res => {
    //   // console.log(res.data())
    //   // console.log(res.id)
    //   // console.log(res.payload.data())
    //   this.viaggioRef = res.payload.data() as Viaggio;
    //   res.payload.id;
    // })
  

    // NOTE
    this.viaggiService.getNoteSnap(id).subscribe(res => {
      this.listaNote = [];
      res.forEach(element => {
        var nota = element.payload.doc.data() as NoteViaggio;
        this.listaNote.push(nota);
      })
    });

    // ASSICURAZIONI
    this.viaggiService.getAssicurazioneSnap(id).subscribe(res => {
      this.listaAssicurazioni = [];
      res.forEach(element => {
        var ass = element.payload.doc.data() as Assicurazione;
        this.listaAssicurazioni.push(ass);
      })
    });

    // ITINERARIO
    this.viaggiService.getItinerarioSnap(id).subscribe(res =>{
      this.listaItinerari = [];
      this.totaleCosti = 0;
        res.forEach(element => {

          var it = element.payload.doc.data() as Itinerario;
          if(element.payload.doc.data().posizione){
            it.posizioneLat = element.payload.doc.data().posizione.latitude;
            it.posizioneLong = element.payload.doc.data().posizione.longitude;
            var linkGmap = '<iframe  src="https://maps.google.com/maps?q='+it.posizioneLat+','+it.posizioneLong+'&hl=it&z=3&amp;output=embed" width="100%" height="200px" frameborder="0" style="border:0" allowfullscreen="" > </iframe>'
            it.gmap = this.sanitizer.bypassSecurityTrustHtml(linkGmap); // per info guardare itinerario.model.ts
          }
          it.alloggio = [];
          this.viaggiService.getAlloggiSnap(id, element.payload.doc.id).subscribe(resA =>{
            resA.forEach(elementA => {
              var sca : StimaCosti = new StimaCosti;
              var all = elementA.payload.doc.data() as Alloggio;
              sca.nome = all.nome;
              sca.numero = all.numeroCamere;
              sca.tipo = all.tipo;
              sca.euro = all.totaleEuro;
              this.listaCosti.push(sca);
              it.alloggio.push(all);
              this.totaleCosti += ((sca.euro * sca.numero) / all.numeroPersone);
            })
          })
          it.trasporti = [];
          this.viaggiService.getTrasportiSnap(id, element.payload.doc.id).subscribe(resT =>{
            resT.forEach(elementT => {
              var sca : StimaCosti = new StimaCosti;
              var trs = elementT.payload.doc.data() as Trasporti;
              sca.nome = trs.compagnia;
              sca.numero = trs.numeroPersone;
              sca.tipo = trs.tipo;
              sca.euro = trs.totaleEuro;
              this.listaCosti.push(sca);
              it.trasporti.push(trs);
              this.totaleCosti += sca.euro * sca.numero;
            })
          })
          it.attivita = [];
          this.viaggiService.getAttivitaSnap(id, element.payload.doc.id).subscribe(resV =>{
            resV.forEach(elementV => {
              var att = elementV.payload.doc.data() as Attivita;
              if(elementV.payload.doc.data().posizione){
                att.posizioneLat = elementV.payload.doc.data().posizione.latitude;
                att.posizioneLong = elementV.payload.doc.data().posizione.longitude;
                var linkGmap = '<iframe  src="https://maps.google.com/maps?q='+att.posizioneLat+','+att.posizioneLong+'&hl=it&z=10&amp;output=embed" width="100%" height="200px" frameborder="0" style="border:0" allowfullscreen="" > </iframe>'
                att.gmap = this.sanitizer.bypassSecurityTrustHtml(linkGmap); // per info guardare itinerario.model.ts
                att.gmap = ""; // per ora lo oscuro perchè così ho la posizione ma non il luogo
              }
              var sca : StimaCosti = new StimaCosti;
              sca.nome = att.nome;
              sca.numero = att.numeroPartecipanti;
              sca.tipo = att.tipo == "ristorante" ? "ristorante" : "attivita"; // per le icone nei costi     
              sca.euro = att.totaleEuro;
              this.listaCosti.push(sca);
              it.attivita.push(att);
              this.totaleCosti += sca.euro * sca.numero;
            })
          })
           this.listaItinerari.push(it);
        })
       // this.listaItinerari.sort((a,b) => (a.step > b.step) ? 1 : ((b.step > a.step) ? -1 : 0)) // li ordino nel service in base alla data

    })





    
  }

}
