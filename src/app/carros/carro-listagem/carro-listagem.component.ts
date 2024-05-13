import { Component, OnInit } from '@angular/core';
import { Carro } from '../../shared/model/carro';
import { Montadora } from '../../shared/model/montadora';
import { CarrosService } from '../../shared/service/carros.service';
import Swal from 'sweetalert2';
import { MontadoraService } from '../../shared/service/montadora.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarroSeletor } from '../../shared/service/seletor/carro.seletor';

@Component({
  selector: 'app-carro-detalhe',
  templateUrl: './carro-listagem.component.html',
  styleUrl: './carro-listagem.component.scss'
})
export class CarroListagemComponent implements OnInit{

  public carros: Carro[] = [];
  public montadoras: Array<Montadora> = new Array();
  public idCarro: number;
  public seletor: CarroSeletor = new CarroSeletor();


  constructor(private carrosService: CarrosService,
              private montadoraService: MontadoraService,
              private router: Router,
              private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.pesquisar();
   this.montadoraService.consultarTodas().subscribe(
    resultado => {
      this.montadoras = resultado;
    },
    erro => {
      console.log('Erro ao buscar as montadoras' + erro);
    }
   )
  }

    public pesquisar(){
      this.carrosService.listarComSeletor(this.seletor).subscribe(
        resultado => {
          this.carros = resultado
          if(this.carros.length === 0){
            Swal.fire('Não foram encontrados', '', 'question')
          }
        },
        erro => {
          Swal.fire('Erro ao pesquisar', erro, 'error')
        }
      )
    }

    public limpar(){
      this.seletor = new CarroSeletor();
    }


}
