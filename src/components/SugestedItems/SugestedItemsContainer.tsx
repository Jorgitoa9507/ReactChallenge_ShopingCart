import { Box, Grid, Stack, Typography } from "@mui/material";
import { SUGESTED_ITEMS } from "../../data/mockCartItems";
import SugestedItemCard from "./SugestedItemCard";

const SugestedItemsContainer: React.FC = () => {
  return (
    <Box sx={{ paddingLeft: "24px" }}>
      <Stack spacing={2}>
        <Typography variant="h1">You might also like</Typography>
        <Grid
          container
          spacing={2}
          sx={{ marginLeft: "-16px !important" }}
          justifyContent="space-between">
          {SUGESTED_ITEMS.map((item, index) => (
            <Grid key={item.id + index} item>
              <SugestedItemCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default SugestedItemsContainer;
