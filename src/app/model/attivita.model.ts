export class Attivita {
    link: string | undefined;
    nome: string | undefined;
    note: string | undefined;
    // geopoint https://stackoverflow.com/questions/48630261/angular-5-firestore-geopoint-displays-object-object
    posizioneLat: number = 0.0;
    posizioneLong: number = 0.0;
    prezzoPersona: string | undefined;
    numeroPartecipanti: number = 0;
    tipo: string | undefined;
    totaleEuro: number = 0;
    gmap: any;
    immagine: string = "";
    orari: string = "";
    brandScr: string = "";
    maps: string | undefined;
    icona: string | undefined;
}
