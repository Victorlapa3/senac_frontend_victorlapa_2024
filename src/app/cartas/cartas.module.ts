import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartasRoutingModule } from './cartas-routing.module';
import { CartaListagemComponent } from './carta-listagem/carta-listagem.component';


@NgModule({
  declarations: [
    CartaListagemComponent
  ],
  imports: [
    CommonModule,
    CartasRoutingModule
  ]
})
export class CartasModule { }
