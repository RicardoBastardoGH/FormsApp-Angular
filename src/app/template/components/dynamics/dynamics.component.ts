import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Favorito, Person } from '../../interfaces/person.interface';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  person: Person = {
    name: 'Ricardo',
    favoritos: [
      {id: 1, name: 'metalGear'},
      {id: 2, name: 'LOL'}
    ]
  }

  newGame: string = '';

  delete(index: number ){
    this.person.favoritos.splice(index,1);
  }

  addGame(){
    const nuevoFavorito: Favorito = {
      id: this.person.favoritos.length +1,
      name: this.newGame
    }

    this.person.favoritos.push( {...nuevoFavorito });

    this.newGame= '';
  }

  guardar(){
    console.log('Formulario Posteado');
  }
}
