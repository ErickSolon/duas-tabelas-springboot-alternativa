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

  ngOnInit(): void {
    this.api.getAll().subscribe((resultado) => {
      this.pessoas = resultado;
    })
  }

}
