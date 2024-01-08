import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeputadoService } from '../model/deputado.service';
import { HttpClientModule } from '@angular/common/http';
import { Deputado } from '../model/deputado';
@Component({
  selector: 'app-exibe-deputados',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './exibe-deputados.component.html',
  styleUrl: './exibe-deputados.component.css',
  providers: [DeputadoService],
})
export class ExibeDeputadosComponent {
  deputados!: Deputado[];
  searchResult?: Deputado;

  exibirTodos: boolean = false;
  nameOptionShow: string = 'Exibir todos';

  constructor(private ds: DeputadoService) {
    ds.obterTodos().subscribe((resposta) => {
      this.deputados = resposta.dados;
      console.log(resposta.dados);
    });

    this.ds.dept?.subscribe(it => console.log(it))
  }

  toggleOptions() {
    this.exibirTodos = !this.exibirTodos;
    this.nameOptionShow = this.exibirTodos ? 'Ocultar Todos' : 'Exibir Todos';
  }
}
