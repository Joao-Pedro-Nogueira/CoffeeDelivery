import { QuantitySelector } from "../../../../../components/QuantitySelector";
import { RegularText } from "../../../../../components/TextsComponents";
import { ActionsContainer, RemoveButton, SelectedCoffeeItemContainer } from "./styles";
import { Trash } from 'phosphor-react'
import { CartItem } from "../../../../../contexts/CartContexts";
import { useCart } from "../../../../../hooks/useCart";
import { formatMoney } from "../../../../../utilities/format-money";

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function SelectedCoffeeItem({coffee}: CoffeeCartCardProps) {

  const { changeCartItemQuantity, removeCartItem } = useCart()

  const coffeeTotalPrice = coffee.price * coffee.quantity
  const formatedPrice = formatMoney(coffeeTotalPrice)

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase")
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease")
  }

  function handleRemoveCartItem() {
    removeCartItem(coffee.id)
  }

  return (
    <SelectedCoffeeItemContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} />
        <div>
          <RegularText color="subtitle">
            {coffee.name}
          </RegularText>
          <ActionsContainer>
            <QuantitySelector 
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}

            />
            <RemoveButton onClick={handleRemoveCartItem}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>{`R$ ${formatedPrice}`}</p>
    </SelectedCoffeeItemContainer>
  )
}