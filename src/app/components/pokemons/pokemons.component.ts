import {Component, Inject, OnInit} from '@angular/core';

import {Pokemon} from "../../models/Pokemon";
import {PokemonsList} from "../../services/pokemons-list.service";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass']
})
export class PokemonsComponent implements OnInit {

  public pokemons : Pokemon[];

  constructor(@Inject(PokemonsList) private svc: PokemonsList) {
  this.pokemons=[];
    }

  ngOnInit(): void {
    this.pokemons=this.svc.pokemons;
  }

}
