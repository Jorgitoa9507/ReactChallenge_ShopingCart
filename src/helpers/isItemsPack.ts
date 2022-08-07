import ItemsPack from "../models/ItemsPack";
import ShoppingItem from "../models/ShoppingItem";

export const isItemsPack = (
  item: ShoppingItem | ItemsPack
): item is ItemsPack => "shoppingItems" in item;
