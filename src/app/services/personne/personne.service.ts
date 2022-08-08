import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Personne} from "../../models/personne/Personne";
import {Sort} from "@angular/material/sort";

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private baseUrl = environment.apiUrl+'/personne';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Personne[]>{
    const url = `${this.baseUrl}/liste`;
    return this.http.get<Personne[]>(url);
  }

  // public getPage(pageable : Pageable , sortableColumn : Sort) : Observable<Page<Age>>{
  //   let url = this.baseUrl+'/page'
  //     + '?page=' +pageable.pageNumber
  //     + '&size=' +pageable.pageSize
  //     + this.getSortParameters(sortableColumn);
  //
  //   return this.http.get<Page<Age>>(url);
  // }
}
