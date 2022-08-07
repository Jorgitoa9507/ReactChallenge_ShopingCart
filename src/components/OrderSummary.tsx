import { Button, Divider, Stack, Typography } from "@mui/material";

const OrderSummary: React.FC = () => {
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
          3
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
        <Typography variant="h1">$3,560.00</Typography>
      </Stack>
      <Stack direction="column" spacing={1}>
        <Button variant="contained">Proceed to Checkout</Button>
        <Button variant="outlined">Continue shopping</Button>
      </Stack>
    </Stack>
  );
};

export default OrderSummary;
