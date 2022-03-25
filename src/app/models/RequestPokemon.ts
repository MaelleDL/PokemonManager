import {Type} from "./Type";

export interface RequestPokemon {
  name: string;
  sprites: any;
  types: Type[];
  height: number;
  weight: number;
}
