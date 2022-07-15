# Zainoinspalla

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

https://www.remotestack.io/angular-firebase-firestore-real-time-crud-example-tutorial/
https://www.positronx.io/create-angular-7-firebase-crud-app-with-angular-material-7/
https://www.positronx.io/angular-7-firebase-5-crud-operations-with-reactive-forms/ usa TOAST SERVICE

Per la stima dei costi utilizzare il totale su ogni trasporti/alloggio, perchè quando si prenotano(e si pagano) le camere di solito è un'unica spesa che comprende più camere, stesso discorso per i trasposti.
Per le attività, includo nella stima dei costi, solo quelle dove il biglietto è già stato pagato. Nel campo totaleEuro ci sarà il prezzo totale pagato per tutti i partecipanti. Se nella creazione dell'attività su firebase non si mette il campo totaleEuro,
l'attività non verrà inserita nella stima dei costi.
Regola: il campo totale è la spesa complessiva per la scheda, ed è quello che poi risulta nella "Stima dei Costi"; nel caso ci siano spese diverse per lo stesso alloggio, trasporto o attività (tipo sconto per alcuni), si fanno due schede uguali con prezzi diversi.