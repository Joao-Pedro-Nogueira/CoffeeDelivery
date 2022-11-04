import { TitleText } from "../../../../components/TextsComponents";
import { ConfirmOrderCard } from "./SelectedCoffeesCard";
import { SelectedCoffeesContainer } from "./styles";

export function SelectedCoffesSection() {
  return(
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>
      <ConfirmOrderCard />
    </SelectedCoffeesContainer>
  )
}