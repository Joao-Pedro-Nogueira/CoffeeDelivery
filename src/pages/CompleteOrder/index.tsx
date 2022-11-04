import { TitleText } from "../../components/TextsComponents";
import {  CompleteOrderContainer, FormsContainer } from "./styles";
import { MapPinLine } from "phosphor-react";
import { CompleteOrderSection } from "./components/CompleteOrderSection";
import { PaymentSection } from "./components/CompleteOrderSection/PaymentSection";
import { SelectedCoffesSection } from "./components/SelectedCoffeesSection";

export function CompleteOrderPage() {
  return(
    <CompleteOrderContainer className="container">
      <FormsContainer>
        <CompleteOrderSection />
        <PaymentSection />
      </FormsContainer>
      <SelectedCoffesSection />
    </CompleteOrderContainer>
  )
}