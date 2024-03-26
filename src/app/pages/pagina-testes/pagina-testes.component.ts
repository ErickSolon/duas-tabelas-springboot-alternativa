import { PessoasModel } from '../../models/pessoas-model';
import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-testes',
  templateUrl: './pagina-testes.component.html',
  styleUrl: './pagina-testes.component.css'
})
export class PaginaTestesComponent implements OnInit {
  constructor(private api: ApiServiceService) { }

  pessoas: PessoasModel[] = [];

  pagina: number = 0
  size: number = 5
  totalPaginas: number = 0

  carregarPagina(): void {
    this.api.getAll(this.pagina, this.size).subscribe((resultado) => {
      this.pessoas = resultado.content;
      this.totalPaginas = resultado.totalPages
    })
  }

  ngOnInit(): void {
    this.carregarPagina()
  }

  proximaPagina(): void {
    if (this.pagina <= this.totalPaginas) {
      this.pagina = this.pagina + 1
      this.carregarPagina()
    }
  }

  anteriorPagina(): void {
    if (this.pagina != 0) {
      this.pagina = this.pagina - 1
      this.carregarPagina()
    }
  }
}
