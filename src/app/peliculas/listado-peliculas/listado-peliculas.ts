import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { ListadoGenerico } from '../../compartidos/componentes/listado-generico/listado-generico';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, CurrencyPipe,ListadoGenerico, MatButtonModule, MatIconModule],
  templateUrl: './listado-peliculas.html',
  styleUrl: './listado-peliculas.css'
})
export class ListadoPeliculas {

 
  @Input({required:true})
  peliculas!: any[];

  agregarPelicula() {
    this.peliculas.push({
      titulo: 'Nueva Película',
      fecha: new Date(),
      actores: ['Actor 1', 'Actor 2'],
      genero: 'Género',
      precio: 10.0      
    });
  }

  RemoverPelicula(pelicula: any) {
    const indice = this.peliculas.findIndex((peliculaActual:any)=> peliculaActual.titulo === pelicula.titulo);
    this.peliculas.splice(indice, 1); 
  }

}
