import { RegularText, TitleText } from "../../../../../components/TextsComponents";
import { ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
  return(
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">
          Total de itens
        </RegularText>
        <RegularText>
          R$ 9,90
        </RegularText>
      </div>
      <div>
        <RegularText size="s">
          Entraga
        </RegularText>
        <RegularText>
          R$ 3,50
        </RegularText>
      </div>
      <div>
        <RegularText weight="700" size="l" color="subtitle">
          Total
        </RegularText>
        <RegularText weight="700" size="l" color="subtitle">
          R$ 13,40
        </RegularText>
      </div>
    </ConfirmationSectionContainer>
  )
}