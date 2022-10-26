import caffe from '../../assets/home/menu/Image1.png'
import { StyledMenuItem } from './styles'
import cardCartIcon from '../../assets/home/card-cart-icon.svg'
import plusIcon from '../../assets/home/plus-icon.svg'
import minusIcon from '../../assets/home/minus-icon.svg'

export function MenuItem() {
  return(
    <StyledMenuItem>
      <img id='coffee-img' src={caffe}/>
      <span className="tag">Tradicional</span>
      <h3>Expresso Tradicional</h3>
      <p id='description-div'>O tradicional café feito com água quente e grãos</p>
      <div id='add-to-cart-div'>
        <p><span>R$</span> 9,90</p>
        <div id='buttons-cart-div'>
          <div id='select-quantity-div'>
            <img src={minusIcon} />
            1
            <img src={plusIcon}/>
          </div>
          <div id='add-to-cart-button'>
            <img src={cardCartIcon} />
          </div>
        </div>
      </div>
    </StyledMenuItem>
  )
}