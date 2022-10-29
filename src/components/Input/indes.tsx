import { InputContainer } from "./style";
import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...props}: InputProps) {
  return(
    <InputContainer {...props} />

  )
}