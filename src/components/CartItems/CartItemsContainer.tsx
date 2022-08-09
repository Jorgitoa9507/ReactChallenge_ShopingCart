import { Divider, Stack, Typography } from "@mui/material";
import { useLayoutEffect } from "react";
import { useShopingCartContext } from "../../context/shoppingCartState";
import { CART_ITEMS } from "../../data/mockCartItems";
import CartItem from "./CartItemComponent";

export default function CartItemsContainer() {
  const { state, dispatch } = useShopingCartContext();

  useLayoutEffect(() => {
    dispatch?.({
      type: "SET_CART_ITEMS",
      payload: CART_ITEMS,
    });
  }, []);
  return (
    <Stack direction="column" spacing={3}>
      <Typography variant="h1">Your cart</Typography>
      {state.cartItems.map((item) => (
        <>
          <CartItem cartItem={item} key={item.id} />
          <Divider />
        </>
      ))}
    </Stack>
  );
}
