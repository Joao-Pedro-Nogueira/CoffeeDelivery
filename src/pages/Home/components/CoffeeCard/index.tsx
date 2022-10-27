import { ShoppingCart } from "phosphor-react";
import { QuantitySelector } from "../../../../components/QuantitySelector";
import { RegularText, TitleText } from "../../../../components/TextsComponents";
import { formatMoney } from "../../../../utils/format-money";
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

export function CoffeeCard({coffee}: CoffeeProps) {

  const formatedPrice = formatMoney(coffee.price)
  return(
    <CoffeeCardContainer>
      <img 
      src={`/public/coffees/${coffee.photo}`} />
      
      <Tag marginBottom={1}>
        {coffee.tags.map((tag) => {
          return(
            <span key={`${coffee.id}${coffee.tags}`}>
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
          <QuantitySelector />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}