import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/globals";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </CartContextProvider>
  );
}

export default App;
