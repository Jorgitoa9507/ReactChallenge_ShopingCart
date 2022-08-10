import ItemsPack from "../models/ItemsPack";
import ShoppingItem from "../models/ShoppingItem";

export const isItemsPack = (
  item: ShoppingItem | ItemsPack
): item is ItemsPack => "shoppingItems" in item;

export function calcPackPrice(pack: ItemsPack) {
  return pack.shoppingItems.reduce((acc, item) => acc + item.price, 0);
}
