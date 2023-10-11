import { ContactPage } from "./pages/ContactPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";

const theme = createTheme({
  palette: {
    secondary: {
      main: "rgb(194, 27, 23)",
    },
  },
  typography: {
    fontFamily: ['"Helvetica Neue"', "Roboto", "Arial", "sans-serif"].join(","),
    fontSize: 14,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "#F5F5F5",
          paddingTop: "24px",
          paddingBottom: "24px",
          marginTop: "24px",
        }}
      >
        <ContactPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
