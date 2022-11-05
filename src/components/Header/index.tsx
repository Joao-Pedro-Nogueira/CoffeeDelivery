import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import CoffeeLogo from '../../assets/header-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useTheme } from "styled-components";
import { useCart } from "../../hooks/useCart";
import { NavLink } from "react-router-dom";

export function Header() {

  const { cartQuantity } = useCart()

  const theme = useTheme()

  return(
    <HeaderContainer>
      <div className="container">
        <NavLink to="/Home">
          <img src={CoffeeLogo} />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight='fill'/>
            Campo Grande, MS
          </HeaderButton>
          <NavLink to="/CompleteOrder">
            <HeaderButton variant='yellow'>
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight='fill'/>
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}