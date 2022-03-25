import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {RequestPokemonList} from "../../models/RequestPokemonList";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass']
})
export class PokemonsComponent implements OnInit {

  public pokemonsList$: Observable<RequestPokemonList> | undefined;

  constructor(
    @Inject(ApiService) private api: ApiService
  ) {
  }

  ngOnInit(): void {
    this.pokemonsList$ = this.api.getPokeList();
  }

}
