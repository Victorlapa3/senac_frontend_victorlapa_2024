import { Component, OnInit } from '@angular/core';
import { CartasService } from '../../shared/service/cartas.service';
import { CartaSeletor } from '../../shared/seletor/carta.seletor';

export interface Carta{
  id: number;
  nome: string,
  forca: number,
  inteligencia: number,
  velocidade: number,
  dataCadastro: Date;
}

@Component({
  selector: 'app-carta-listagem',
  templateUrl: './carta-listagem.component.html',
  styleUrl: './carta-listagem.component.scss'
})

export class CartaListagemComponent implements OnInit {

  public cartas: Carta[] = [];
  public seletor: CartaSeletor = new CartaSeletor();

  constructor(private cartasService: CartasService) { }

  ngOnInit(): void {
    this.consultarTodasCartas();
  }

  private consultarTodasCartas() {
    this.cartasService.listarTodas().subscribe(
      resultado => {
        //retorno bem sucedido da chamada http
        this.cartas = resultado;
      },
      erro => {
        // retorno com erros da chamada http

        console.error('Erro ao consultar cartas', erro);
      }
    );
    }
    public pesquisar(){
      this.cartasService.listarComSeletor(this.seletor).subscribe(
        resultado => {
          this.cartas = resultado;
        },
        erro => {
          console.error('Erro ao consultar cartas', erro);
        }
      );
    }
    public limpar() {
      this.seletor = new CartaSeletor();
    }
}

