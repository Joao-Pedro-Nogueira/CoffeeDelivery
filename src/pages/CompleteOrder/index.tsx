import { TitleText } from "../../components/TextsComponents";
import {  CompleteOrderPageContainer, FormsContainer, SelectedCoffeesContainer } from "./styles";
import { MapPinLine } from "phosphor-react";
import { CompleteOrderSection } from "./components/CompleteOrderSection/CompleteOrder";
import { SelectedCoffeesSection } from "./components/SelectedCoffeesSection";

export function CompleteOrderPage() {
  return(
    <CompleteOrderPageContainer className="container">
      <FormsContainer>
        <CompleteOrderSection />
        <SelectedCoffeesSection />
      </FormsContainer>
      <SelectedCoffeesContainer>
        <TitleText size="xs" color="subtitle">
          Cafés selecionados
        </TitleText>
      </SelectedCoffeesContainer>
    </CompleteOrderPageContainer>
  )
}