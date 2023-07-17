import { NgIf, formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template :`
  <h2 class="center">Editer {{ pokemon?.name }}<h2>
  <p *NgIf="pokemon" class="center">
    <img [src]="pokemon.picture">
    </p>
  <app-pokemon-formatCurrency. .*NgIf="pokemon".[pokemon]="pokemon"></app-pokemon-form>`,

styles: [

 ]
})
export class EditPokemonComponent implements OnInit{
  pokemon:Pokemon/undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService

  ){}

    ngOnInit(){
      const pokemonId: string / null =this.route.snapshot.paramMap.get('id');
      if(pokemonId){
        this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
      }else{
        this.pokemon = undefined;

      }

    }

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

