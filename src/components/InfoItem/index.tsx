import { ReactNode } from "react";
import { RegularText } from "../TextsComponents";
import { IconContainer, InfoItensConteiner } from "./styles";

interface InfoItemProps {
  icon: ReactNode,
  text: string | ReactNode,
  iconColor: string
}

export function InfoItem({ icon, text, iconColor }: InfoItemProps) {
  return(
    <InfoItensConteiner>
      <IconContainer iconColor={iconColor}>{icon}</IconContainer>
      {typeof text === 'string' ? <RegularText color="text" size="m">{text}</RegularText> : text}
    </InfoItensConteiner>
  )
}