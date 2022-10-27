import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import CoffeeLogo from '../../assets/header-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useTheme } from "styled-components";

export function Header() {

  const theme = useTheme()

  return(
    <HeaderContainer>
      <div className="container">
        <img src={CoffeeLogo} />

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight='fill'/>
            Campo Grande, MS
          </HeaderButton>
          <HeaderButton variant='yellow'>
            <ShoppingCart size={20} weight='fill'/>
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}