import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Peliculas {
  id: string
  movie_id: string
  title: string
  overview: string
  release_date: string
  poster_path: string
  popularity: string
  price: string
  category: string
  duration: string
}

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
 private url = "https://lightgrey-owl-901213.hostingersite.com/api/get_peliculas.php?limit=100"

  constructor(
    private readonly http:HttpClient
  ) { }
  
  obtenerPeliculas(){
    return this.http.get(this.url)
  }
}
