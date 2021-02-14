import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

const url="https://localhost:44323/api/";

@Injectable({
  providedIn: 'root'
})
export class CnnService {

  constructor( private http : HttpClient) {}

  VerFact(){
      return this.http.get(url + 'prueba');
   }
   Insert ( g ){
      return this.http.post(url + 'prueba/', g)
   }

   Insertdos (a){
     return this.http.post(url + 'AgregarAutor', a)
   }

   InsertTres(e){
    return this.http.post(url + 'AgregarEditorial', e)
     
   }

}
