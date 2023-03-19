import { TitleText } from "../../../../components/TextsComponents";
import { coffees } from "../../../../data/coffees-menu";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, MenuContainer } from "./styles";

export function Menu() {
  return (
    <MenuContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeList>
        {coffees.map((coffee) => {
          return (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          )
        })}
      </CoffeeList>
    </MenuContainer>
  )
}