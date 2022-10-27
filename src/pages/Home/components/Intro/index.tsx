import { IntroContainer, IntroContent } from "./styles";
import IntroImg from '../../../../assets/intro-image.svg'
import { TitleText } from "../../../../components/TextsComponents";

export function Intro() {
  return(
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <TitleText size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </TitleText>
          </section>
        </div>
        <img src={IntroImg} />
      </IntroContent>
    </IntroContainer>
  )
}