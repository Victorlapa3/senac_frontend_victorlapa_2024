import { Component, OnInit } from '@angular/core';
import { Carta } from '../../shared/model/carta';
import { CartasService } from '../../shared/service/cartas.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { error } from 'console';


@Component({
  selector: 'app-carta-detalhe',
  templateUrl: './carta-detalhe.component.html',
  styleUrl: './carta-detalhe.component.scss'
})
export class CartaDetalheComponent implements OnInit{

  public carta: Carta= new Carta();
  public idCarta: number;

  constructor(private CartasService: CartasService,
              private router: Router,
              private route: ActivatedRoute
              ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idCarta = params['id'];
      if(this.idCarta) {
        this.buscarCarta();
      }
    });
   }

   buscarCarta(): void {
    this.CartasService.consultar(this.idCarta).subscribe(
      (carta) => {
        this.carta = carta;
      },
      (erro) => {
        Swal.fire('Erro ao buscar a carta!', erro, 'error');
      }
    );
   }

salvar(): void {
  if(this.idCarta){
    this.atualizar();
  } else {
    this.inserir();
  }
}

  inserir(): void {
    this.CartasService.salvar(this.carta).subscribe(
      (resposta) => {
        Swal.fire('Carta salva com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao salvar a carta!',erro.error.mensagem,'error');
      }
    );
  }

  atualizar(): void {
    this.CartasService.atualizar(this.carta).subscribe(
      (resposta) => {
        Swal.fire('Carta atualizada com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao atualizar a carta: ' + erro.error.mensagem, 'error');
      }
    );
  }


  public voltar() {
    this.router.navigate(['/cartas'])
  }

}
