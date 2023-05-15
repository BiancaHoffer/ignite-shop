export interface ProductData {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  defaultPriceId: string;
  price: number;

}

export interface NewProduct extends ProductData {
  amount: number;
}