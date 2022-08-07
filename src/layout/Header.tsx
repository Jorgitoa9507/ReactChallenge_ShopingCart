import { styled, alpha } from "@mui/material/styles";
import { AppBar, Box, Toolbar, IconButton, InputBase } from "@mui/material";
import {
  SearchOutlined,
  PersonOutline,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import LinksMenu from "../components/LinksMenu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: theme.palette.white.main,
  color: theme.palette.dark.main,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const LogoBox = styled("div")(({ theme }) => ({
  width: 172,
  height: 48,
  backgroundColor: theme.palette.dark["09"],
  color: theme.palette.dark["06"],
  fontSize: 13,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.dark.main,
  },
  "& .MuiInputBase-input::-ms-input-placeholder": {
    color: theme.palette.dark.main,
  },
}));

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={(theme) => ({
          backgroundColor: theme.palette.dark["01"],
          minHeight: 88,
          justifyContent: "center",
          boxShadow: "none",
          paddingLeft: theme.spacing(8),
        })}>
        <Toolbar>
          <Box
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: theme.spacing(4),
              flexGrow: 2,
            })}>
            <LogoBox>
              <span>LOGO</span>
            </LogoBox>
            <Search sx={{ flexGrow: 1 }}>
              <SearchIconWrapper>
                <SearchOutlined />
              </SearchIconWrapper>
              <SearchInput
                placeholder="Search products"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          <Box sx={{ flexGrow: 1, textAlign: "end" }}>
            <IconButton size="large" color="inherit">
              <PersonOutline fontSize="large" />
              <span style={{ fontSize: 15, paddingLeft: 5 }}>Sign in</span>
            </IconButton>
            <IconButton size="large" color="inherit">
              <ShoppingBagOutlined fontSize="large" />
              <span style={{ fontSize: 15, paddingLeft: 5 }}>Cart</span>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <LinksMenu />
    </Box>
  );
}
