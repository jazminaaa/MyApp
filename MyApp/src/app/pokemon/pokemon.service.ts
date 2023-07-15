import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons-list';

@Injectable()
export class PokemonService {

  getPokemonList(): Pokemon[]{

  return POKEMONS;

  }
  getPokemonById(pokemonId: number):Pokemon /Undefined {
    return POKEMONS.Find(pokemon=>pokemon.id==pokemonId);


  }
  getPokemonTypeList(): string[]{

    return[
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fee',
      'Vol',
      'Combat',
      'Psy'
    ];

  }


}



