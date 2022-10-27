import { TitleText } from "../../../../components/TextsComponents";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, MenuContainer } from "./styles";

export function Menu() {
  return(
    <MenuContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeList>
    </MenuContainer>
  )
}