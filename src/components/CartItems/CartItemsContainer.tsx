import { Divider, Stack, Typography } from "@mui/material";
import { CART_ITEMS } from "../../data/mockCartItems";
import CartItem from "./CartItemComponent";

export default function CartItemsContainer() {
  return (
    <Stack direction="column" spacing={3}>
      <Typography variant="h1">Your cart</Typography>
      {CART_ITEMS.map((cartItem) => (
        <>
          <CartItem cartItem={cartItem} key={cartItem.id} />
          <Divider />
        </>
      ))}
    </Stack>
  );
}
