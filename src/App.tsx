import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import Button from "./components/Button/Button";
import { GlobalStyle } from "./styles/globals";
import { ShoppingCartSimple } from "phosphor-react";
import IconAndText from "./components/IconAndText/IconAndText";
import Title from "./components/Title/Title";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button bg-color="yellow-dark" text="LABEL" />
      <IconAndText
        bg-color="none"
        icon={ShoppingCartSimple}
        text="Compra simples e segura"
        icon-color="white"
        bg-color-icon="yellow-dark"
        isRounded={true}
        text-color="base-text"
      />
      <Title
        color="base-title"
        text="Encontre o café perfeito para qualquer hora do dia"
        size="XL"
      />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
