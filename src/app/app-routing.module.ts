import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PaginaTestesComponent } from './pages/pagina-testes/pagina-testes.component';
import { AdicionarPessoaComponent } from './pages/adicionar-pessoa/adicionar-pessoa.component';
import { EditarPessoaComponent } from './pages/editar-pessoa/editar-pessoa.component';
import { DeletarPessoaComponent } from './pages/deletar-pessoa/deletar-pessoa.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'testes',
    component: PaginaTestesComponent
  },
  {
    path: 'testes/adicionar',
    component: AdicionarPessoaComponent
  },
  {
    path: 'testes/editar/:id',
    component: EditarPessoaComponent
  },
  {
    path: 'testes/deletar/:id',
    component: DeletarPessoaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
