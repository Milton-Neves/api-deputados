import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeputadoService } from '../model/deputado.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-exibe-deputados',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './exibe-deputados.component.html',
  styleUrl: './exibe-deputados.component.css',
  providers: [DeputadoService],
})
export class ExibeDeputadosComponent {
  constructor(private ds: DeputadoService) {
    ds.obterTodos().subscribe((resposta) => {
      console.log(resposta.dados);
    });
  }
}
