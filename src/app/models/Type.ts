import {TypeName} from "./typeName";

export class Type {

  private _type: TypeName;

  constructor(type: TypeName) {
    this._type = type;
  }

  get type(): TypeName {
    return this._type;
  }

  set type(value: TypeName) {
    this._type = value;
  }
}
