import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginaTestesComponent } from './pages/pagina-testes/pagina-testes.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarPessoaComponent } from './pages/editar-pessoa/editar-pessoa.component';
import { AdicionarPessoaComponent } from './pages/adicionar-pessoa/adicionar-pessoa.component';
import { DeletarPessoaComponent } from './pages/deletar-pessoa/deletar-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    BodyComponent,
    FooterComponent,
    PaginaTestesComponent,
    EditarPessoaComponent,
    AdicionarPessoaComponent,
    DeletarPessoaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
