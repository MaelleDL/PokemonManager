import {Type} from "./Type";
import {Sprites} from "./Sprites";

export interface RequestPokemon {
  id: number;
  name: string;
  sprites: Sprites;
  types: Type[];
  height: number;
  weight: number;
}
