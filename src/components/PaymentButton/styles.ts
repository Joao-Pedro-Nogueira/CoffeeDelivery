import styled from "styled-components";


export const PaymentButtonStyles = styled.button`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  padding: 1rem;
  text-transform: uppercase;
  background-color: ${({theme}) => theme.colors["base-button"]};
  border-radius: 6px;
  border: none;

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

  p {
    font-size: ${({theme}) => theme.textSizes["components-button-s"]};
    color: ${({theme}) => theme.colors["base-text"]};
    line-height: 130%;
  }
`