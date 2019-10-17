
export class Product {
  public name: string;
  public category: string;
  public description: string;
  public price: number;
  public id: number;


constructor(
  name,
  category,
  description,
  price,
  id
) {
  this.name = name;
  this.category = category;
  this.description = description;
  this.price = price;
  this.id = id;
  }
}
