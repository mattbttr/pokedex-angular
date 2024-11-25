import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'pokemons', pathMatch:'full'},
    {path: '', loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)},
    {path: '**', component: PageNotFoundComponent}
];
