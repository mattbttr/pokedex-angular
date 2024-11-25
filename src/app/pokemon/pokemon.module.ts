import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonService } from './pokemon.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    DetailPokemonComponent,
    ListPokemonComponent
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
