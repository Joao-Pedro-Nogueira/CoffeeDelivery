import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { QuantitySelector } from "../../../../components/QuantitySelector";
import { RegularText, TitleText } from "../../../../components/TextsComponents";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Tag } from "./styles";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number
}
interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {

  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity(state => state + 1)
  }

  function handleDecrease() {
    setQuantity(state => state - 1)
  }

  const { addCoffeeToCart } = useCart()

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity: quantity
    }

    addCoffeeToCart(coffeeToAdd)
  }

  const formatedPrice = formatMoney(coffee.price)
  return (
    <CoffeeCardContainer>
      <img
        src={`/${coffee.photo}`} />

      <Tag marginBottom={1}>
        {coffee.tags.map((tag) => {
          return (
            <span key={`${coffee.id} ${tag}`}>
              {tag}
            </span>
          )
        })}
      </Tag>
      <TitleText size="s" color="subtitle" marginBottom={0.5}>
        {coffee.name}
      </TitleText>
      <RegularText size="s" color="text" marginBottom={2}>
        {coffee.description}
      </RegularText>
      <CardFooter>
        <div>
          <RegularText size="s" color="text">
            R$
          </RegularText>
          <TitleText size="m" color="text" as="strong">
            {formatedPrice}
          </TitleText>
        </div>
        <AddCartWrapper>
          <QuantitySelector
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}