import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeputadoService {
  private URL = 'https://dadosabertos.camara.leg.br/api/v2';

  constructor(private http: HttpClient) {}

  obterTodos(): Observable<any> {
    return this.http.get(`${this.URL}/deputados?ordem=ASC&ordenarPor=nome`);
  }

  obterDeputadosPorFiltro(nome: string, partido: string): Observable<any> {
    let params = '';

    if (nome) {
      params += `&nome=${nome}`;
    }

    if (partido) {
      params += `&siglaPartido=${partido}`;
    }

    return this.http.get(
      `${this.URL}/deputados?ordem=ASC&ordenarPor=nome${params}`
    );
  }
}
