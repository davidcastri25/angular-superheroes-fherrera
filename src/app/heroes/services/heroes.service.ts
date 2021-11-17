import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  constructor( private http: HttpClient ) { }

  //GET: trae todos los héroes
  getHeroes() {
    return this.http.get('http://localhost:3000/heroes');
  }
}
