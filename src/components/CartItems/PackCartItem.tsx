import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import CartItem from "../../models/CartItem";
import ItemsPack from "../../models/ItemsPack";
import { DeleteButton } from "./SingleCartItem";
import { styled } from "@mui/material/styles";

export interface PackCartItemProps {
  cartItem: CartItem;
}

const ShoopingListItem = styled("span")(({ theme }) => ({
  position: "relative",
  fontSize: 14,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.dark["01"],
  marginRight: 8,
  "::before": {
    content: '"."',
    position: "absolute",
    top: -15,
    left: -13,
    fontSize: 24,
  },
}));

const ItemDescription = styled("span")(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: 14,
  color: theme.palette.dark["07"],
}));

const PackCartItem: React.FC<PackCartItemProps> = ({ cartItem }) => {
  const item = cartItem.item as ItemsPack;

  return (
    <Box>
      <Stack direction={"row"} spacing={2}>
        <Stack
          justifyContent="center"
          direction="column"
          alignItems="center"
          spacing={1}>
          <Box
            sx={(theme) => ({
              width: 120,
              height: 120,
              maxHeight: { xs: 120, md: 167 },
              maxWidth: { xs: 120, md: 250 },
              padding: "8px",
              backgroundColor: theme.palette.dark["10"],
              justifyContent: "center",
              alignItems: "center",
            })}>
            <Grid container spacing={1} sx={{ marginTop: 0 }}>
              {item.shoppingItems.map((shoppI, index) => {
                const gridXs =
                  item.shoppingItems.length % 2 === 0
                    ? 6
                    : index === 0
                    ? 12
                    : 6;

                return (
                  <Grid
                    item
                    key={shoppI.id}
                    xs={gridXs}
                    sx={{ display: "flex" }}
                    justifyContent="center"
                    alignItems="center">
                    <Box
                      sx={(theme) => ({
                        height: 40,
                        width: 47,
                        background: `url(${shoppI.image}) no-repeat center center`,
                        backgroundColor: theme.palette.dark["10"],
                        backgroundSize: "contain",
                      })}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <Box
            sx={(theme) => ({
              fontSize: 10,
              fontWeight: theme.typography.fontWeightMedium,
              backgroundColor: theme.palette.dark["10"],
              color: theme.palette.dark["06"],
              width: 34,
              height: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            })}>
            PACK
          </Box>
        </Stack>
        <Stack direction="column" spacing={1} sx={{ paddingTop: "8px" }}>
          <Typography
            variant="subtitle1"
            fontWeight={(theme) => theme.typography.fontWeightBold}>
            {item.name}
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={(theme) => theme.typography.fontWeightBold}>
            Quantity: {cartItem.amount}
          </Typography>
          <Stack
            spacing={"4px"}
            sx={{ marginLeft: "22px !important" }}
            alignItems="start">
            {item.shoppingItems.map((shoppI) => (
              <ShoopingListItem>
                {`${shoppI.name}: `}
                <ItemDescription>{`(${shoppI.description})`}</ItemDescription>
              </ShoopingListItem>
            ))}
          </Stack>
          <Stack direction={"row"} spacing={"6px"} alignItems="center">
            <DeleteButton
              variant="text"
              disableRipple={true}
              sx={{
                justifyContent: "end",
              }}>
              Edit Pack
            </DeleteButton>
            <Typography
              sx={(theme) => ({
                color: theme.palette.dark["03"],
                fontSize: 12,
                fontWeight: theme.typography.fontWeightBold,
                marginLeft: "2px !important",
                verticalAlign: "middle",
              })}>
              |
            </Typography>
            <DeleteButton variant="text" disableRipple={true}>
              Remove
            </DeleteButton>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PackCartItem;
