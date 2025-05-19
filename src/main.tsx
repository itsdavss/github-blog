import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
