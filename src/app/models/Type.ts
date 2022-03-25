export class Type {
  private _type: any;

  constructor(type: any) {
    this._type = type;
  }

  get type(): any {
    return this._type;
  }

  set type(value: any) {
    this._type = value;
  }

}
