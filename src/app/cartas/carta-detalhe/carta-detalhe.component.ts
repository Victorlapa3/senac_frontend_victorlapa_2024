import { Component, OnInit } from '@angular/core';
import { Carta } from '../../shared/model/carta';
import { Router } from 'express';
import { CartasService } from '../../shared/service/cartas.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-carta-detalhe',
  templateUrl: './carta-detalhe.component.html',
  styleUrl: './carta-detalhe.component.scss'
})
export class CartaDetalheComponent implements OnInit{
  public carta: Carta= new Carta();

  constructor(private CartasService: CartasService,
              private router: Router,
              private route: ActivatedRoute
              ) {
  }

  ngOnInit(): void {

  }

  // salvar(): void {
  //   this.CartasService.salvar(this.carta).subscribe(
  //     (resposta) => {
  //       Swal.fire('Carta salva com sucesso!', '', 'success');
  //     }
  //   );
  // }


  public voltar() {
    this.router.navigate(['/cartas'])
  }
}
