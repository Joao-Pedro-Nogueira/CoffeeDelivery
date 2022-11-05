import { RegularText, TitleText } from "../../components/TextsComponents";
import { ConfirmedOrderContainer, OrderDetailsContainer } from "./styles";
import Ilustration from "../../assets/confirmed-order-ilustration.svg"
import { InfoItem } from "../../components/InfoItem";
import { MapPin, CurrencyDollar, Clock } from "phosphor-react";
import { useTheme } from "styled-components";

export function ConfirmedOrderPage() {

  const {colors} =useTheme()
  return (
    <ConfirmedOrderContainer className="container">
      <div>
        <TitleText size='l'>Uhuul! Pedido confirmado</TitleText>
        <RegularText>Agora é só aguardar que logo o café chegará até você</RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoItem 
            icon={<MapPin weight="fill" size={16} />}
            iconColor={colors["brand-purple"]}
            text={
            <RegularText color="text">
              Entrega em <strong>Rua Tv. Ana Vani, 51</strong>
              <br />
              Centro, Campo Grande - MS
            </RegularText>
            }
          />
          <InfoItem 
            icon={<Clock weight="fill" size={16} />}
            iconColor={colors["brand-yellow"]}
            text={
            <RegularText color="text">
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </RegularText>
            }
          />
          <InfoItem 
            icon={<CurrencyDollar weight="fill" size={16} />}
            iconColor={colors["brand-yellow-dark"]}
            text={
            <RegularText color="text">
              Pagamento na entrega
              <br />
              <strong>Cartão de crédito</strong>
            </RegularText>
            }
          />
        </OrderDetailsContainer>

        <img src={Ilustration} />
      </section>
    </ConfirmedOrderContainer>
  )
}