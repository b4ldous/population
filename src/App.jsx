import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { AppBar, CssBaseline} from "@mui/material";
import  Container from "@mui/material/Container";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Box>
          <AppBar color="transparent">
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                height: "75px",
                justifyContent: "flex-end",
              }}
            >
              <Box>
                <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                  {theme.palette.mode === "dark" ? (
                    <Brightness7Icon />
                  ) : (
                    <Brightness4Icon />
                  )}
                </IconButton>
              </Box>
            </Container>
          </AppBar>
        </Box>
        <Container sx={{marginTop: "100px"}}>

          hello
        </Container>
      </Box>
    </>
  );
}

function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
