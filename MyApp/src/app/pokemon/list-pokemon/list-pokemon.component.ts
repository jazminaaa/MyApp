import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent {

  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router:Router){}

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemons',pokemon.id]);
  }

}


 