import { Component } from '@angular/core';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { RouterOutlet } from '@angular/router';
import { BorderCardDirective } from '../border-card.directive';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [DatePipe, PokemonTypeColorPipe, CommonModule, RouterOutlet, NgIf, NgFor, BorderCardDirective],
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent {
  pokemonList : Pokemon[] = POKEMONS;

}
