import { ReactNode } from "react";
import { RegularText } from "../TextsComponents";
import { PaymentButtonStyles } from "./styles"

interface PaymentButtonProps {
  icon: ReactNode,
  content: string
}

export function PaymentButton({ icon, content }: PaymentButtonProps) {
  return(
    <PaymentButtonStyles>
      {icon}
      <p>
        {content}
      </p>
    </PaymentButtonStyles>
  )
}