export interface ProductData {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  defaultPriceId: string;
  price: string;
}

export interface NewProduct extends ProductData {
  amount: number;
}