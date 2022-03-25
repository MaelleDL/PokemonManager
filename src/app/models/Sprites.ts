export class Sprites {
  private _back_default: string;
  private _back_shiny: string;
  private _front_default: string;
  private _front_shiny: string;

  constructor(back_default: string, front_default: string, back_shiny: string) {
    this._back_default = back_default;
    this._front_default = front_default;
    this._back_shiny = back_shiny;
    this._front_shiny = front_default;
  }

  get back_default(): string {
    return this._back_default;
  }

  set back_default(value: string) {
    this._back_default = value;
  }

  get back_shiny(): string {
    return this._back_shiny;
  }

  set back_shiny(value: string) {
    this._back_shiny = value;
  }

  get front_default(): string {
    return this._front_default;
  }

  set front_default(value: string) {
    this._front_default = value;
  }

  get front_shiny(): string {
    return this._front_shiny;
  }

  set front_shiny(value: string) {
    this._front_shiny = value;
  }
}
