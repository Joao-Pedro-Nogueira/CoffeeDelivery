import { BasicButton } from '../../../../../components/BasicButton'
import { useCart } from '../../../../../hooks/useCart'
import { ConfirmationSection } from '../ConfirmationSection'
import { SelectedCoffeeItem } from '../SelectedCoffeeItem'
import { SelectedCoffeesCardContainer } from './styles'

export function ConfirmOrderCard() {

  const { cartItems, cartQuantity } = useCart()

  return(
    <SelectedCoffeesCardContainer>
      {cartItems.map(item => (
        <SelectedCoffeeItem key={item.id} coffee={item} />
      ))}
      <ConfirmationSection />
      <BasicButton disabled={cartQuantity <= 0} content='Confirmar pedido' />
    </SelectedCoffeesCardContainer>
  )
}