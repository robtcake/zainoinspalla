export class Viaggio {
    titolo: string | undefined;
    descrizione: string | undefined;
    immagine: string | undefined;
    difficolta: string | undefined;
    pernottamenti: string | undefined;
    pasti: string | undefined;
    trasporti: string | undefined;
    viaggiareSicuri: string[]=[];
    vistiVaccini: string | undefined;
    linkVistiVaccini: string | undefined;;
    dataInizio:any | undefined;
    dataFine:any | undefined;
    bandiere:string[]=[];
    percorsoMapsEmbed: any;
    pubblicato: boolean = true;
    cosaPortare: string[]=[];
    programmaFile: string | undefined;
    valuta: string | undefined;
}

export class ViaggiareSicuriFarnesina  {
    bandiera: string | undefined;
    link: any | undefined;
  };

// gestire date da firebase
// https://stackoverflow.com/questions/50956255/pipe-date-angular-unable-to-convert-timestamp
// commenti