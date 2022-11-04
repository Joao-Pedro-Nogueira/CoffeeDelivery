import { QuantitySelector } from "../../../../../components/QuantitySelector";
import { RegularText } from "../../../../../components/TextsComponents";
import { ActionsContainer, RemoveButton, SelectedCoffeeItemContainer } from "./styles";
import { Trash } from 'phosphor-react'


export function SelectedCoffeeItem() {
  return (
    <SelectedCoffeeItemContainer>
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1668384000&Signature=csCRm8PWo1v7cD1WPFgoqbiTjL2WJ08LArCDTCotaJU2uhLjTXQ0KqAzrDUgoIze0xJLhc4xEgDPHFm~UULfUdhm4wVv0cZD5cawiAgdCnKA0mjktV8s18miXgIVNvBCUSaQCZYUJNU0WlhR7zYqJoKhvAf9MzGr~t9D-FlxI~-d4prdxjpyh4f-knza-Bw1~XMefoTXMhkUjzFzfg06NWtI5naRJJ49qtiQ0kqtN7TTBf9Ac0Zk~R7C89xli1R2BhxQUcPRS-cB075nbYpRMYugpI~1syQ8sis4STRU1OpzqabOSiCVvRx--MCYWHSD53StP6WVS1ye~GJEuMc55A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
        <div>
          <RegularText color="subtitle">
            Expresso Tradicional
          </RegularText>
          <ActionsContainer>
            <QuantitySelector size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90 </p>
    </SelectedCoffeeItemContainer>
  )
}