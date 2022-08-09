import ShoppingItem from "./ShoppingItem";

export default interface ItemsPack {
  id: string;
  name: string;
  shoppingItems: ShoppingItem[];
  posibleAmounts: number[];
}
