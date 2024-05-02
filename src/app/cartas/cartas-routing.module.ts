import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaListagemComponent } from './carta-listagem/carta-listagem.component';
import { CartasModule } from './cartas.module';
import { CartaDetalheComponent } from './carta-detalhe/carta-detalhe.component';

const routes: Routes = [
  { path: '', component: CartaListagemComponent},
  { path: 'detalhe', component: CartaDetalheComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CartasRoutingModule { }
