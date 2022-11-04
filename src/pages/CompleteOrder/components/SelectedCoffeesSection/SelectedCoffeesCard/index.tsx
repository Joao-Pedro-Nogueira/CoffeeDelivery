import { BasicButton } from '../../../../../components/BasicButton'
import { ConfirmationSection } from '../ConfirmationSection'
import { SelectedCoffeeItem } from '../SelectedCoffeeItem'
import { SelectedCoffeesCardContainer } from './styles'

export function ConfirmOrderCard() {
  return(
    <SelectedCoffeesCardContainer>
      <SelectedCoffeeItem />
      <SelectedCoffeeItem />
      <SelectedCoffeeItem />
      <ConfirmationSection />
      <BasicButton content='Confirmar pedido' />
    </SelectedCoffeesCardContainer>
  )
}