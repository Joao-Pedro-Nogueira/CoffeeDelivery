import { QuantitySelectorContainer, SelectorButton } from "./styles";
import { Plus, Minus } from 'phosphor-react'
import { RegularText } from "../TextsComponents";

export function QuantitySelector() {
  return(
    <QuantitySelectorContainer>
      <SelectorButton>
        <Minus weight="bold" size={14} />
      </SelectorButton>
      <input type="number" readOnly={true} value={1} />
      <SelectorButton>
        <Plus weight="bold" size={14}/>
      </SelectorButton>
    </QuantitySelectorContainer>
  )
}