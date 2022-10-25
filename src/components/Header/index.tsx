import { HeaderContainer } from "./styles";
import CoffeeLogo from '../../assets/header/header-logo.svg'
import LocalIcon from '../../assets/header/local-icon.svg'
import cartIcon from '../../assets/header/cart-icon.svg'

export function Header() {
  return(
    <HeaderContainer>
      <div id="header-div">
        <img src={CoffeeLogo}/>
        <div id="header-secondary-div">
          <div id="local-div">
            <img src={LocalIcon} />
            Campo Grande, MS
          </div>
          <div id="cart-div">
            <img src={cartIcon} />
          </div>
        </div>
      </div>
    </HeaderContainer>
  )
}