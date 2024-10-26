import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../servicios/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {
  items: any = [];

  constructor(
    private readonly peliculasService: PeliculasService
  ) { }

  ngOnInit() {
    const items = localStorage.getItem('items');
    if (items == null) {
      this.peliculasService.obtenerPeliculas().subscribe(
        {
          next: (res: any) => {
            localStorage.setItem('items', JSON.stringify(res))
            this.items = res
          },
          error(err) {
            console.error(err)
          },
        })
    } else {
      this.items = JSON.parse(items)
    }
  }

}
