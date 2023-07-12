import { Component ,OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pokemonsList: Pokemon[] = POKEMONS;
  ngOnInit(){
    console.table(this.pokemonsList);
    this.selectPokemon(this.pokemonsList[0]);
  }

  selectPokemon(pokemon: Pokemon){
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }

}
