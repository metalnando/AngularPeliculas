import { NgClass } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { _ErrorStateTracker } from '@angular/material/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.html',
  styleUrl: './rating.css'
})
export class Rating{
  

  @Input({required: true, transform: (valor:number) => Array(valor).fill(0)})  
  maxRating!: number[];

  @Input({required: true})
  ratingSeleccionado= 0;

  ratingAnterior = 0;

 manejarMouseEnter(indice:number){
  this.ratingSeleccionado = indice + 1;
 } 

 manejarMouseLeave(){
  if(this.ratingAnterior !== 0){
    this.ratingAnterior=this.ratingAnterior;
  }
  else{
    this.ratingSeleccionado = 0;
  }
}
manejarClick(indice: number){
  this.ratingSeleccionado = indice + 1;
  this.ratingAnterior = this.ratingSeleccionado;
}
}