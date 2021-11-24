import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  constructor( private http: HttpClient ) { }

  //GET: trae todos los héroes
  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }

  //GET: devuelve el héroe por su ID
  getHeroePorId(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`http://localhost:3000/heroes/${id}`);
  }
}
