import { Component, OnInit } from '@angular/core';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule, DatePipe, NgFor} from '@angular/common';
import { Pokemon } from '../../pokemon';
import { BorderCardDirective } from '../border-card.directive';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [DatePipe, PokemonTypeColorPipe, CommonModule, NgFor, BorderCardDirective],
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit{
  pokemonList : Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService){}

  ngOnInit(): void {
    this.pokemonList = this.pokemonService.getPokemonList();
  }

  goToPokemonDetails(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}