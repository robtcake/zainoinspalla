import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaViaggiComponent } from './lista-viaggi/lista-viaggi.component';
import { DettaglioViaggioComponent } from './dettaglio-viaggio/dettaglio-viaggio.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista-viaggi', pathMatch: 'full' },
  { path: 'lista-viaggi', component: ListaViaggiComponent},
  { path: 'dettaglio-viaggio/:id', component: DettaglioViaggioComponent},
  { path: '**', redirectTo: 'index.html', pathMatch: 'full'  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
