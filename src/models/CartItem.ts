import ItemsPack from "./ItemsPack";
import ShoppingItem from "./ShoppingItem";

export default interface CartItem {
  id: string;
  item: ShoppingItem | ItemsPack;
  amount: number;
}
