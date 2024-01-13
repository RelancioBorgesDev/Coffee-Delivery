import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import banner from "../../assets/CoffeeBanner.png";
import SubTitle from "../../components/SubTitle/SubTitle";
import IconAndText from "../../components/IconAndText/IconAndText";
import { Clock, Coffee, Package, ShoppingCart } from "phosphor-react";
import {
  CoffeesContainer,
  CoffeesList,
  Container,
  ContentContainer,
  IconTextContainer,
  LeftContent,
  TextContainer,
} from "./Home.styles";
import CoffeeCard from "./_components/CoffeeCard/CoffeeCard";
import coffees_data from "../../data/coffees-data.json";

export default function Home() {
  const contentIconText = [
    {
      "bg-color": "none" as const,
      "bg-color-icon": "yellow-dark" as const,
      "icon-color": "white" as const,
      icon: ShoppingCart,
      isRounded: true,
      text: "Compra simples e segura",
      "text-color": "base-text" as const,
    },
    {
      "bg-color": "none" as const,
      "bg-color-icon": "base-text" as const,
      "icon-color": "white" as const,
      icon: Package,
      isRounded: true,
      text: "Embalagem mantém o café intacto",
      "text-color": "base-text" as const,
    },
    {
      "bg-color": "none" as const,
      "bg-color-icon": "yellow" as const,
      "icon-color": "white" as const,
      icon: Clock,
      isRounded: true,
      text: "Entrega rápida e rastreada",
      "text-color": "base-text" as const,
    },
    {
      "bg-color": "none" as const,
      "bg-color-icon": "purple-dark" as const,
      "icon-color": "white" as const,
      icon: Coffee,
      isRounded: true,
      text: "O café chega fresquinho até você",
      "text-color": "base-text" as const,
    },
  ];

  return (
    <Container>
      <Header />
      <ContentContainer>
        <LeftContent>
          <TextContainer>
            <Title
              color="base-title"
              size="XL"
              text="Encontre o café perfeito para qualquer hora do dia"
            />
            <SubTitle
              color="base-subtitle"
              size="L"
              text="Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora"
            />
          </TextContainer>
          <IconTextContainer>
            {contentIconText.map(
              ({
                "bg-color": bgColor,
                "bg-color-icon": bgColorIcon,
                "icon-color": iconColor,
                "text-color": textColor,
                icon,
                isRounded,
                text,
              }) => (
                <IconAndText
                  bg-color={bgColor}
                  bg-color-icon={bgColorIcon}
                  icon-color={iconColor}
                  icon={icon}
                  isRounded={isRounded}
                  text={text}
                  text-color={textColor}
                />
              )
            )}
          </IconTextContainer>
        </LeftContent>
        <img src={banner} alt="banner" />
      </ContentContainer>

      <CoffeesContainer>
        <Title color="base-title" size="LL" text="Nossos cafés" />
        <CoffeesList>
          {coffees_data.map(
            ({
              id,
              coffe_title,
              coffee_image,
              coffee_quantity,
              coffee_subtitle,
              price,
              tags,
            }) => (
              <CoffeeCard
                key={id}
                id={id}
                coffe_title={coffe_title}
                coffee_image={coffee_image}
                coffee_quantity={coffee_quantity}
                tags={tags}
                price={price}
                coffee_subtitle={coffee_subtitle}
              />
            )
          )}
        </CoffeesList>
      </CoffeesContainer>
    </Container>
  );
}
