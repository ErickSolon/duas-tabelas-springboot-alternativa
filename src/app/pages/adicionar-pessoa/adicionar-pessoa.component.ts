import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { PessoasModel } from '../../models/pessoas-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-pessoa',
  templateUrl: './adicionar-pessoa.component.html',
  styleUrl: './adicionar-pessoa.component.css'
})
export class AdicionarPessoaComponent {
  constructor(private api: ApiServiceService, private router: Router) { }

  pessoa: PessoasModel = {
    documentosModel: {
      cpf: ""
    }
  }

  onClickSave(): void {
    this.api.save(this.pessoa).subscribe(() => {
      this.router.navigateByUrl('/testes')
    })
  }
}
