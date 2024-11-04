import { Component, Directive, OnInit} from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { NgFor, NgIf } from '@angular/common';
import { BorderCardDirective} from './border-card.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgFor, BorderCardDirective],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  pokemonList : Pokemon[] = POKEMONS;
  pokemonSelected : Pokemon | undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId : string){
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    if(pokemon){
      console.log(`Vous avez cliqué sur le Pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demandé un Pokemon qui n'existe pas.`);
      this.pokemonSelected = pokemon;
    }
  }
}