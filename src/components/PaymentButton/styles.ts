import styled from "styled-components";


export const PaymentButtonStyles = styled.button`
  input {
    visibility: hidden;
    appearance: none;
  }

  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
  border: none;
`

export const ContentContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;
  text-transform: uppercase;
  background-color: ${({theme}) => theme.colors["base-button"]};
  border-radius: 6px;
  border: 1px solid ${({theme}) => theme.colors["base-button"]};
  height: 3rem;
  font-size: 0.75rem;

  svg {
    color: ${({theme}) => theme.colors["brand-purple"]}
  }

  &:focus {
    background-color: ${({theme}) => theme.colors["brand-purple-light"]};
    border: 1px solid ${({theme}) => theme.colors["brand-purple"]};
  }

  &:checked {
    background-color: ${({theme}) => theme.colors["brand-purple-light"]};
    border: 1px solid ${({theme}) => theme.colors["brand-purple"]};  
  }

  &:hover {
  background-color: ${({theme}) => theme.colors["base-hover"]};
  }
`