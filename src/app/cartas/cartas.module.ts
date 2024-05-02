import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { CartasRoutingModule } from './cartas-routing.module';
import { CartaListagemComponent } from './carta-listagem/carta-listagem.component';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { CartaDetalheComponent } from './carta-detalhe/carta-detalhe.component';


@NgModule({
  declarations: [
    CartaListagemComponent,
    CartaDetalheComponent,
  ],
  imports: [
    CommonModule,
    CartasRoutingModule,
    HttpClientModule,
    FormsModule // Módulo de formulários
  ],
  providers: [],
  bootstrap: [CartaListagemComponent]
})
export class CartasModule { }
