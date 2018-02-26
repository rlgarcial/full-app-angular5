export class Product {

  constructor(
    private _id: number,
    private _name: string,
    private _description: string,
    private _price: number,
    private _image_url: string
  ) {}

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

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get image_url(): string {
    return this._image_url;
  }

  set image_url(value: string) {
    this._image_url = value;
  }
}