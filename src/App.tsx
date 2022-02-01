import { useMemo, FC, memo, useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navigation from "./Navigation";
import { ColorModeContext } from "./components/ToggleModeTheme";

const App: FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [main, setMain] = useState("rgb(245,245,247)");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  useEffect(() => {
    mode === "dark" ? setMain("rgb(46,47,48)") : setMain("rgb(245,245,247)");
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "hsla(0,0%,100%,0.8)",
          },
          secondary: {
            main: main,
          },
          mode,
        },
      }),
    [mode, main]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default memo(App);
