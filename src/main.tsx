

import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "./context/themeContext";
import { customTheme } from "./style/theme";
import { PageContextProvider } from "./hooks/usePageContext";
import { PaletteMode } from "@mui/material";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const AppWrapper = () => {
  const [themeMode, setThemeMode] = useState <PaletteMode>("light");

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  console.log('env==',import.meta.env.VITE_API_URL);

  return (
    // <React.StrictMode>
      <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
        <PageContextProvider>
          <ThemeProvider theme={customTheme(themeMode)}>
            <TonConnectUIProvider manifestUrl={import.meta.env.VITE_API_URL +"manifest.json"}>
            <App />
            </TonConnectUIProvider>
          </ThemeProvider>
        </PageContextProvider>
      </ThemeContext.Provider>
    // </React.StrictMode>
  );
};
ReactDOM.createRoot(document.getElementById('root')!).render(
    <AppWrapper />
 
)

