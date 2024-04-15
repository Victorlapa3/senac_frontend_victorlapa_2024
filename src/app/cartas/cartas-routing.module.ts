import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaListagemComponent } from './carta-listagem/carta-listagem.component';

const routes: Routes = [
  { path: "", component: CartaListagemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartasRoutingModule { }
