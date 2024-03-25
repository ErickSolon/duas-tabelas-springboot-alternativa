import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoasModel } from '../../models/pessoas-model';

@Component({
  selector: 'app-deletar-pessoa',
  templateUrl: './deletar-pessoa.component.html',
  styleUrl: './deletar-pessoa.component.css'
})
export class DeletarPessoaComponent implements OnInit {
  constructor(private router: Router, private api: ApiServiceService, private activatedRoute: ActivatedRoute) { }

  pessoa: PessoasModel = {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.api.getById(param.get('id')).subscribe((resposta) => {
        this.pessoa = resposta
      })
    })
  }

  onClickDelete() {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.api.deleteById(param.get('id')).subscribe((resposta) => {
        this.router.navigateByUrl('testes')
      })
    })
  }

}
