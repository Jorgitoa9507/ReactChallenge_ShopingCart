import { Box, Container, Grid, Typography } from "@mui/material";
import CartItemsContainer from "../components/CartItems/CartItemsContainer";
import OrderSummary from "../components/OrderSummary";

export default function MainContainer() {
  return (
    <Container maxWidth="xl" sx={{ width: "calc(100% - 48px)" }}>
      <Box
        sx={(theme) => ({
          flexGrow: 1,
          paddingTop: theme.spacing(1),
        })}>
        <Grid container spacing={3} sx={{ marginTop: 0, marginLeft: 0 }}>
          <Grid item xs={9}>
            <CartItemsContainer />
          </Grid>
          <Grid item xs={3}>
            <OrderSummary />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
