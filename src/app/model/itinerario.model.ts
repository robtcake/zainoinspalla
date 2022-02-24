import { Trasporti } from './trasporti.model';
import { Attivita } from './attivita.model';
import { Alloggio } from './alloggio.model';
export class Itinerario {
    luogo: string | undefined;
    notti: number | undefined;
    note: string | undefined;
    nome: string | undefined;
    posizioneLat: number = 0.0;
    posizioneLong: number = 0.0;
    data:any | undefined;
    programma: string | undefined;
    step: number | number = 0;
    alloggio: Alloggio[] = [];
    attivita: Attivita[] = [];
    trasporti: Trasporti[] = [];
    gmap: any;
}

// info su come stampare HMTL con src da ts e le mappe 
// https://stackoverflow.com/questions/38446235/div-innerhtml-not-working-with-iframe-html-in-angular2-html-inject soluzione per vedere html src
// https://stackoverflow.com/questions/39438039/correct-way-provide-domsanitizer-to-component-with-angular-2-rc6 dichiarazione sanitizer

// per le mappe provare angular + gmap
// https://angular-maps.com/guides/getting-started/
// https://developers.google.com/maps/documentation/javascript/examples/map-simple#maps_map_simple-typescript