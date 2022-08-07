import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./layout/Header";
import MainContainer from "./layout/MainContainer";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <MainContainer />
    </ThemeProvider>
  );
}

export default App;
