import { Stack, Link, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LinkItem = styled(Link)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.dark["04"],
  textDecoration: "none",
  cursor: "pointer",
  verticalAlign: "middle",
  alignSelf: "center",
  fontSize: 15,
  "&:hover": {
    color: theme.palette.dark["01"],
  },
}));

export default function LinksMenu() {
  return (
    <Box
      sx={(theme) => ({
        height: 64,
        backgroundColor: "dark.10",
        paddingLeft: theme.spacing(10),
      })}>
      <Stack direction="row" spacing={1} sx={{ height: "100%" }}>
        <LinkItem>All products</LinkItem>
        <LinkItem>Packaging</LinkItem>
        <LinkItem>Drinkware</LinkItem>
        <LinkItem>Apparel</LinkItem>
        <LinkItem>Notebooks</LinkItem>
        <LinkItem>Backpacks</LinkItem>
      </Stack>
    </Box>
  );
}
