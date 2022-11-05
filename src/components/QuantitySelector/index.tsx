import { QuantitySelectorContainer, SelectorButton } from "./styles";
import { Plus, Minus } from 'phosphor-react'
import { RegularText } from "../TextsComponents";

interface QuantityInputProps {
  size?: 'small'| 'medium',
  quantity: number,
  onIncrease: () => void,
  onDecrease: () => void,
}

export function QuantitySelector({ 
  size = 'medium', 
  quantity, 
  onIncrease, 
  onDecrease 
}: QuantityInputProps) {
  return(
    <QuantitySelectorContainer size={size}>
      <SelectorButton disabled={quantity <= 1} onClick={onDecrease}>
        <Minus weight="bold" size={14} />
      </SelectorButton>
      <input 
        type="number" 
        readOnly={true} 
        value={quantity} 
      />
      <SelectorButton onClick={onIncrease}>
        <Plus weight="bold" size={14}/>
      </SelectorButton>
    </QuantitySelectorContainer>
  )
}