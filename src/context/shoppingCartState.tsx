import { createContext, useContext, useReducer } from "react";
import CartItem from "../models/CartItem";
import ShoppingCartReducer, {
  DeleteCartItemAction,
  SetCartItemQuantityAction,
  SetCartItemsAction,
} from "./shoppingCartReducer";

export interface State {
  cartItems: CartItem[];
}

export interface Store {
  state: State;
  dispatch?: React.Dispatch<
    SetCartItemQuantityAction | SetCartItemsAction | DeleteCartItemAction
  >;
}
const initialState: State = {
  cartItems: [],
};

const ShoppingCartContext = createContext<Store>({ state: initialState });
export const useShopingCartContext = () => useContext(ShoppingCartContext);

const ShoppingCartState: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [state, dispatch] = useReducer(ShoppingCartReducer, initialState);

  return (
    <ShoppingCartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartState;
