import CartItem from "../models/CartItem";
import { State } from "./shoppingCartState";

export interface SetCartItemsAction {
  type: "SET_CART_ITEMS";
  payload: CartItem[];
}

export interface SetCartItemQuantityAction {
  type: "SET_CART_ITEM_QUANTITY";
  payload: {
    cartItemId: string;
    quantity: number;
  };
}

export interface DeleteCartItemAction {
  type: "DELETE_CART_ITEM";
  payload: {
    cartItemId: string;
  };
}

type Action =
  | SetCartItemQuantityAction
  | SetCartItemsAction
  | DeleteCartItemAction;

const ShoppingCartReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_CART_ITEMS":
      return {
        cartItems: action.payload,
      };
    case "SET_CART_ITEM_QUANTITY":
      return {
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.id === action.payload.cartItemId) {
            return {
              ...cartItem,
              amount: action.payload.quantity,
            };
          }
          return cartItem;
        }),
      };
    case "DELETE_CART_ITEM":
      return {
        ...state.cartItems,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.cartItemId
        ),
      };

    default:
      return state;
  }
};

export default ShoppingCartReducer;
