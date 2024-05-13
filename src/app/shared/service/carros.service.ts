import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Carro } from "../model/carro";
import { Observable } from "rxjs";
import { CarroSeletor } from './seletor/carro.seletor';


@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  private readonly API = 'http://localhost:8080/senac-20241-backend-exemplos/rest/carro'

  constructor(private httpClient: HttpClient) { }

  // salvar(carro: Carro): Observable<Carro>{
  //   return this.httpClient.post<Carro>(this.API, carro);
  // }
  // consultar(id: number): Observable<Carro>{
  //   return this.httpClient.get<Carro>(this.API + '/' + id);
  // }
  listarComSeletor(seletor: CarroSeletor): Observable<Array<Carro>> {
    return this.httpClient.post<Array<Carro>>(this.API + '/filtro', seletor);
  }
}
