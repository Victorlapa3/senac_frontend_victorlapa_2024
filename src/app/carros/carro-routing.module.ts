import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroListagemComponent } from './carro-listagem/carro-listagem.component';
import { CarrosMontadorasComponent } from './carro-estoque/carro-estoque.component';

const routes: Routes = [
  {path: 'lista', component: CarroListagemComponent},
  {path: 'montadora', component: CarrosMontadorasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarroRoutingModule { }
