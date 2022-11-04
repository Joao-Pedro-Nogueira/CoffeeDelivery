import { ButtonHTMLAttributes } from "react";
import { RegularText } from "../TextsComponents";
import { BasicButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: String | number;
}

export function BasicButton({ content, ...props}: ButtonProps) {
  return(
    <BasicButtonContainer {...props}>
      {content}
    </BasicButtonContainer>
  )
}