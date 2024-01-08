import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
import { DeputadoService } from '../model/deputado.service';
import { Deputado } from '../model/deputado';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers: [DeputadoService],
})
export class SearchComponent {
  searchResult?: Deputado;

  constructor(private ds: DeputadoService) {}

  text?: string;

  search() {
    const elInput = document.getElementById('input') as HTMLInputElement;
    elInput.value = '';

    this.ds.obterDeputadosPorFiltro(this.text!, '').subscribe((it) => {
      this.searchResult = it.dados;
    });
  }
}
