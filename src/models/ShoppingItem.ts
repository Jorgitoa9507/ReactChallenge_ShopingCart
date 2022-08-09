export default interface ShoppingItem {
  id: string;
  name: string;
  minimunAmount: number;
  posibleAmounts: number[];
  price: number;
  image: string;
  description: string;
  priceRange?: [number, number];
}
