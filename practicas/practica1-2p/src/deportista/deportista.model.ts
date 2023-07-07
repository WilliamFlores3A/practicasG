export class Deportista {
  constructor(
    public id: string,
    public description: string,
    public price: number,
  ) {
    this.id = id;
    this.description = description;
    this.price = price;
  }
}
