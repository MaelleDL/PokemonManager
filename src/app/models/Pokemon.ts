export class Pokemon{
  private _id : number;
  private _name : string;
  private _category : string;
  private _types: string[];
  private _height: number;
  private _weight : number;

  constructor(id: number, name: string, category: string, types: string[], height: number, weight: number) {
    this._id = id;
    this._name = name;
    this._category = category;
    this._types = types;
    this._height = height;
    this._weight = weight;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  get types(): string[] {
    return this._types;
  }

  set types(value: string[]) {
    this._types = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }
}
