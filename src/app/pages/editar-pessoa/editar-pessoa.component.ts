import { DocumentosModel, PessoasModel } from './../../models/pessoas-model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrl: './editar-pessoa.component.css'
})
export class EditarPessoaComponent implements OnInit {
  constructor(private api: ApiServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  pessoa: PessoasModel = {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametro) => {
      this.api.getById(parametro.get('id')).subscribe((resultado) => {
        this.pessoa = resultado;
      });
    })
  }

  onClickUpdate(): void {
    this.activatedRoute.paramMap.subscribe((parametro) => {
      this.api.updateById(this.pessoa, parametro.get('id')).subscribe(() => {
        this.router.navigateByUrl('testes')
      })
    })
  }

}
