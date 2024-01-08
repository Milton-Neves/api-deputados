import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Deputado } from '../model/deputado';

@Injectable({
  providedIn: 'root',
})
export class DeputadoService {
  dept? = new Subject<any[]>();

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
