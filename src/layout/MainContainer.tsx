import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import CartItemsContainer from "../components/CartItems/CartItemsContainer";
import OrderSummary from "../components/OrderSummary";
import SugestedItemsContainer from "../components/SugestedItems/SugestedItemsContainer";

export default function MainContainer() {
  return (
    <Container
      sx={{
        paddingBottom: "120px",
        paddingLeft: "92px !important",
        paddingRight: "92px !important",
        marginLeft: 0,
        marginRight: 0,
        maxWidth: "100% !important",
      }}>
      <Stack spacing={8}>
        <Box
          sx={(theme) => ({
            flexGrow: 1,
            paddingTop: theme.spacing(1),
          })}>
          <Grid container spacing={3} sx={{ marginTop: 0, marginLeft: 0 }}>
            <Grid item xs={9} sx={{ paddingLeft: "0 !important" }}>
              <CartItemsContainer />
            </Grid>
            <Grid item xs={3}>
              <OrderSummary />
            </Grid>
          </Grid>
        </Box>
        <SugestedItemsContainer />
      </Stack>
    </Container>
  );
}
