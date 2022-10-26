import { HomeContainer, IntroContainer, MenuContainer } from "./styles";
import homeImage from '../../assets/home/home-image.svg'
import cartIcon from '../../assets/home/home-cart-icon.svg'
import timeIcon from '../../assets/home/home-time-icon.svg'
import boxIcon from '../../assets/home/home-box-icon.svg'
import coffeeIcon from '../../assets/home/home-coffee-icon.svg'
import { MenuItem } from "../../components/MenuItem";

export function HomePage() {
  return (
    <HomeContainer>
      <IntroContainer>
        <div id="secondary-home-div">
          <div id="content-home-div">
            <div id="title-home-div">
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </div>
            <div id="infos-home-div">
              <div className="info-column-div">
                <div className="info-row-column">
                  <img src={cartIcon} />
                  <p>Compra simples e segura</p>
                </div>
                <div className="info-row-column">
                  <img src={timeIcon} />
                  <p>Entrega rápida e rastreada</p>
                </div>
              </div>
              <div className="info-column-div">
                <div className="info-row-column">
                  <img src={boxIcon} />
                  <p>Embalagem mantém o café intacto</p>
                </div>
                <div className="info-row-column">
                  <img src={coffeeIcon} />
                  <p>O café chega fresquinho até você</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={homeImage} />
        </div>
      </IntroContainer>
      <MenuContainer>
        <h2>Nossos Cafés</h2>
        <div>
          <MenuItem />
        </div>
      </MenuContainer>
    </HomeContainer>
  )
}