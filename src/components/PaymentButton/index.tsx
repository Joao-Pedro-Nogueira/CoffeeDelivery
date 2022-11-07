import { InputHTMLAttributes, ReactNode } from "react";
import { RegularText } from "../TextsComponents";
import { PaymentButtonStyles, ContentContainer } from "./styles"

type PaymentButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode,
  content: string
}

export function PaymentButton({ id, icon, content, ...props }: PaymentButtonProps) {
  return(
    <PaymentButtonStyles>
      <input id={id} type="radio" {...props} name="PaymentButton" />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {content}
        </ContentContainer>
      </label>
    </PaymentButtonStyles>
  )
}