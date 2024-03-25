import { PessoasModel } from './../models/pessoas-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl: string = "http://127.0.0.1:8080/api/v1/"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<PessoasModel[]> {
    return this.httpClient.get<PessoasModel[]>(this.apiUrl)
  }

  getById(id: any): Observable<PessoasModel> {
    return this.httpClient.get<PessoasModel>(this.apiUrl + id)
  }

  updateById(pessoa: PessoasModel, id: any): Observable<PessoasModel> {
    return this.httpClient.put<PessoasModel>(this.apiUrl + id, pessoa);
  }

  deleteById(id: any): Observable<PessoasModel> {
    return this.httpClient.delete<PessoasModel>(this.apiUrl + id)
  }
}
