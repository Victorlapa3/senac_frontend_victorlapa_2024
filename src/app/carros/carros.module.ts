import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroListagemComponent } from './carro-listagem/carro-listagem.component';
import { CarroRoutingModule } from './carro-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarrosMontadorasComponent } from './carro-estoque/carro-estoque.component';



@NgModule({
  declarations: [
    CarroListagemComponent,
    CarrosMontadorasComponent,
  ],
  imports: [
    CommonModule,
    CarroRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class CarrosModule { }
