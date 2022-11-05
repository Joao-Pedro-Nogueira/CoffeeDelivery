import { RegularText, TitleText } from "../../../../../components/TextsComponents";
import { useCart } from "../../../../../hooks/useCart";
import { formatMoney } from "../../../../../utilities/format-money";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {

  const { cartItemsTotalPrice, cartQuantity } = useCart()
  
  const totalPrice = cartItemsTotalPrice + DELIVERY_PRICE

  const formattedCartTotalPrice = formatMoney(cartItemsTotalPrice)
  const formattedDelivaryPrice = formatMoney(DELIVERY_PRICE)
  const formattedTotalPrice = formatMoney(totalPrice)


  return(
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">
          Total de itens
        </RegularText>
        <RegularText>
          R$ {formattedCartTotalPrice}
        </RegularText>
      </div>
      <div>
        <RegularText size="s">
          Entrega
        </RegularText>
        <RegularText>
          R$ {formattedDelivaryPrice}
        </RegularText>
      </div>
      <div>
        <RegularText weight="700" size="l" color="subtitle">
          Total
        </RegularText>
        <RegularText weight="700" size="l" color="subtitle">
          {formattedTotalPrice}
        </RegularText>
      </div>

    </ConfirmationSectionContainer>
  )
}