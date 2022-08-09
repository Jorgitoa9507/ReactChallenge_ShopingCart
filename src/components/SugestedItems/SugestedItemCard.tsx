import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingItem from "../../models/ShoppingItem";

export interface SugestedItemCardProps {
  item: ShoppingItem;
}

const Amount = styled("span")(({ theme }) => ({
  fontSize: 14,
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.dark["01"],
}));

const SugestedItemCard: React.FC<SugestedItemCardProps> = ({ item }) => {
  return (
    <Box>
      <Stack>
        <Stack direction="column" spacing={"10px"}>
          <Box
            sx={(theme) => ({
              width: 336,
              height: 336,
              background: `url(${item.image}) no-repeat center center`,
              backgroundColor: theme.palette.dark["10"],
              backgroundSize: "contain",
            })}
          />
          <Typography
            variant="subtitle2"
            fontWeight={(theme) => theme.typography.fontWeightBold}
            color={(theme) => theme.palette.dark.main}>
            {item.name}
          </Typography>
          <Stack direction="row" width="75%" justifyContent="space-between">
            <Typography
              sx={(theme) => ({
                fontSize: "15px",
                fontWeight: theme.typography.fontWeightMedium,
                color: theme.palette.dark["01"],
              })}>
              {item.priceRange
                ? `$${item.priceRange[0]} - $${item.priceRange[1]}`
                : `$${item.price}`}
            </Typography>
            <Typography
              sx={(theme) => ({
                fontSize: 14,
                fontWeight: theme.typography.fontWeightRegular,
                color: theme.palette.dark["05"],
              })}>
              Minimum: <Amount>{item.minimunAmount}</Amount>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SugestedItemCard;
