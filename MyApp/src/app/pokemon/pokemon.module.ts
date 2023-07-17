import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideClientHydration } from '@angular/platform-browser';
import { PokemonService } from './pokemon.service';
import { Route, RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTyeColorPipe } from './pokemon-tye-color.pipe';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';


const pokemonRoutes: Routes=[
{path:'edit/pokemon/:id',component: EditPokemonComponent},
{path:'pokemons',component: ListPokemonComponent},
{path: 'pokemon/:id', component: DetailPokemonComponent}

];


@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTyeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]
})

export class PokemonModule { }
