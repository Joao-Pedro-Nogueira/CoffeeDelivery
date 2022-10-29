import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { RegularText, TitleText } from "../../../../components/TextsComponents";
import { AddressForm } from "../AdressForm";
import { CardTitle, CompleteOrderContainer, FormCard } from "./styles";

export function CompleteOrderSection() {

  const {colors} = useTheme()

  return(
    <CompleteOrderContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

        <FormCard>
          <CardTitle>
            <MapPinLine size={22} color={colors["brand-yellow-dark"]} />
            <div>
              <RegularText size="m" color="subtitle" >
                Endereço de entrega
              </RegularText>
              <RegularText size="s" color="text" >
                Informe o endereço onde deseja receber seu pedido
              </RegularText>
            </div>
          </CardTitle>
          <AddressForm />
        </FormCard>
    </CompleteOrderContainer>
  )
}