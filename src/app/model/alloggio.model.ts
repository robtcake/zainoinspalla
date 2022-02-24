export class Alloggio {
    link: string | undefined;
    nome: string | undefined;
    numeroCamere: number = 0;
    numeroPersone: number = 1;
    // geopoint https://stackoverflow.com/questions/48630261/angular-5-firestore-geopoint-displays-object-object
    posizioneLat: number = 0.0;
    posizioneLong: number = 0.0;
    prezzoCamera: string | undefined;
    tipoCamere: string | undefined;
    tipo: string | undefined;
    note: string | undefined;
    totaleEuro: number = 0;
}
