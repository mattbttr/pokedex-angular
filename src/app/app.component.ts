import { Component, OnInit} from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<h1>Pokédex</h1>`
})
export class AppComponent implements OnInit{
  pokemonList : Pokemon[] = POKEMONS;

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon : Pokemon){
    console.log(`Vous avez cliqué sur le Pokemon ${pokemon.name}`);
  }
}