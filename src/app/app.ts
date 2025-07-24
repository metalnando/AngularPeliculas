import {
  DatePipe,
  CurrencyPipe,
  UpperCasePipe,
  NgFor,
  NgOptimizedImage,
  NgIf,
} from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ListadoPeliculas } from './peliculas/listado-peliculas/listado-peliculas';
import { Menu } from "./compartidos/componentes/menu/menu";
import { Rating } from "./compartidos/componentes/rating/rating";

@Component({
  selector: 'app-root',
  imports: [ListadoPeliculas, Menu, Rating], 
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
    ngOnInit(): void {
        setTimeout(() => {
      this.peliculasEnCines = [
        {
          titulo: 'El señor de los anillos',
          fecha: new Date(2001, 11, 19),
          actores: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
          genero: 'Fantasía',
          precio: 12.99,
          poster:
            'https://es.web.img3.acsta.net/medias/nmedia/18/89/67/45/20061512.jpg',
        },
        {
          titulo: 'Harry Potter y la piedra filosofal',
          fecha: new Date(2001, 6, 30),
          actores: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
          genero: 'Fantasía',
          precio: 15.5,
          poster:
            'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2021/11/11/detalle-del-poster-de-harry-potter-y-la-piedra-filosofal.jpeg',
        },
        {
          titulo: 'Parásitos',
          fecha: new Date(2019, 4, 30),
          actores: ['Song Kang-ho', 'Choi Woo-shik', 'Park So-dam'],
          genero: 'Comedia Negra, Thriller',
          precio: 10.0,
          poster:
            'https://images.theconversation.com/files/314594/original/file-20200210-109935-qw76eq.jpg?ixlib=rb-4.1.0&rect=0%2C232%2C1080%2C1041&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip',
        }];
        
        this.peliculasProximosEstrenos = [
        {
          titulo: 'Interstellar',
          fecha: new Date(2014, 10, 26),
          actores: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
          genero: 'Ciencia Ficción, Drama',
          precio: 14.75,
          poster:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorgqVWIA3r0PNpcVwuZLqNjuAiVblqtfv7A&s',
        },
        {
          titulo: 'La La Land',
          fecha: new Date(2016, 11, 9),
          actores: ['Ryan Gosling', 'Emma Stone'],
          genero: 'Musical, Drama, Romance',
          precio: 11.25,
          poster:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lI2lykQvizbuqttcykk3mH0bQaqJgtL3-A&s',
        },
        {
          titulo: 'Spider-Man: Un nuevo universo',
          fecha: new Date(2018, 11, 14),
          actores: ['Shameik Moore', 'Jake Johnson', 'Hailee Steinfeld'],
          genero: 'Animación, Acción, Aventura',
          precio: 13.5,
          poster: 'https://i.blogs.es/3484a7/spiderverse4/1366_521.jpg',
        },
        {
          titulo: 'Origen',
          fecha: new Date(2010, 6, 16),
          actores: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
          genero: 'Ciencia Ficción, Acción',
          precio: 12.0,
          poster:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gt0BhJWKGu_K3294BW9kDfOaeddWxzw6-g&s',
        },
      ];
    }, 150);
    }

    peliculasEnCines! : any[];
    peliculasProximosEstrenos! : any[];

   

    
}
