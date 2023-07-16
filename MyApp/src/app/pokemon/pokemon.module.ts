import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideClientHydration } from '@angular/platform-browser';
import { PokemonService } from './pokemon.service';
import { Route, RouterModule } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTyeColorPipe } from './pokemon-tye-color.pipe';


const pokemonRoutes: Route=[
{path:'pokemons',component: ListPokemonComponent},
{path: 'pokemon/:id', component: DetailPokemonComponent}

];


@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTyeColorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ],
})
providers: [PokemonService]
export class PokemonModule { }
