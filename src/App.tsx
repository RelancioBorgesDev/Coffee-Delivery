import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import Button from "./components/Button/Button";
import { GlobalStyle } from "./styles/globals";
import { ShoppingCartSimple } from "phosphor-react";
import IconAndText from "./components/IconAndText/IconAndText";
import Title from "./components/Title/Title";
import Header from "./components/Header/Header";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
