import { Button, Divider, Stack, Typography } from "@mui/material";
import { useShopingCartContext } from "../context/shoppingCartState";
import { calcPackPrice, isItemsPack } from "../helpers/utils";

const OrderSummary: React.FC = () => {
  const { state } = useShopingCartContext();

  const total = state.cartItems.reduce((acc, item) => {
    return (
      acc +
      item.amount *
        (isItemsPack(item.item) ? calcPackPrice(item.item) : item.item.price)
    );
  }, 0);

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h1">Order Summary</Typography>
      <Stack direction="row" justifyContent="space-between">
        <Typography
          variant="subtitle2"
          color={(theme) => theme.palette.dark["05"]}>
          Number of items
        </Typography>
        <Typography
          variant="subtitle2"
          color={(theme) => theme.palette.dark["05"]}>
          {state.cartItems.length}
        </Typography>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between">
        <Typography
          variant="subtitle1"
          color={(theme) => theme.palette.dark["01"]}
          sx={(theme) => ({ fontWeight: theme.typography.fontWeightMedium })}>
          Total:
        </Typography>
        <Typography variant="h1">${total.toFixed(2)}</Typography>
      </Stack>
      <Stack direction="column" spacing={1}>
        {state.cartItems?.length > 0 && (
          <Button variant="contained">Proceed to Checkout</Button>
        )}
        <Button variant="outlined">Continue shopping</Button>
      </Stack>
    </Stack>
  );
};

export default OrderSummary;
