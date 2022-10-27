import { ShoppingCart } from "phosphor-react";
import { QuantitySelector } from "../../../../components/QuantitySelector";
import { RegularText, TitleText } from "../../../../components/TextsComponents";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Tag } from "./styles";

export function CoffeeCard() {
  return(
    <CoffeeCardContainer>
      <img 
      src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1667779200&Signature=HeDE89LwcvcS9ppgX1jzq3qyENb-L7t2-BR0dUgU0r9jKHYW0Y9iQepVsTWWGAzEHE1F0oLXkDkAVbd~sxK8E0cuuFGyX4kl68UZZ4E~CXT8eFmKmkPyu5b-J5q4mjbemSCl91ZW3u4tMmBTUaXWlkO86m6pVN4EJYMHa4~AQ7uYEgF2ivVRxaFVjL-kVggwfoD6uQmHJ6tpgX6k9ckplWKGUAoZfqnNojiDuEhF9PDOEGi6oFiNvBSVY7sQcNw6RfCZSUAKlTk8j~3u6Y97b3EDrvBLmEmqSeU-CC65MXkGLpFattUYuRNS2KyIhdOflnY~-Z7S1qGaS76KhGXWvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      <Tag marginBottom={1}>
        <span>Tradicional</span>
      </Tag>
      <TitleText size="s" color="subtitle" marginBottom={0.5}>
        Expresso Tradiconal
      </TitleText>
      <RegularText size="s" color="text" marginBottom={2}>
        O tradicional café feito com água quente e grãos moídos
      </RegularText>
      <CardFooter>
        <div>
          <RegularText size="s" color="text">
            R$
          </RegularText>
          <TitleText size="m" color="text" as="strong">
            9,90
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