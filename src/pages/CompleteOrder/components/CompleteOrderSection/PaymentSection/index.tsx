import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useTheme } from "styled-components";
import { PaymentButton } from "../../../../../components/PaymentButton";
import { RegularText } from "../../../../../components/TextsComponents";
import { CardTitle, FormCard } from "../styles";
import { ButtonsContainer } from "./styles";

export function PaymentSection() {

  const {colors} = useTheme()

  return(
    <FormCard>
      <CardTitle>
        <CurrencyDollar size={22} color={colors["brand-purple"]} />
        <div>
          <RegularText size="m" color="subtitle" >
            Pagamento
          </RegularText>
          <RegularText  size="s" color="text" >
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </RegularText>
        </div>
      </CardTitle>
      <ButtonsContainer>
        <PaymentButton icon={<CreditCard size={16} color={colors["brand-purple"]} />} content={"cartão de credito"} />
        <PaymentButton icon={<Bank size={16} color={colors["brand-purple"]} />} content={"cartão de débito"} />
        <PaymentButton icon={<Money size={16} color={colors["brand-purple"]} />} content={"dinheiro"} />
        </ButtonsContainer>
    </FormCard>
  )
}