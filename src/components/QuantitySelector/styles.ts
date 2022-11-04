import styled, { css } from "styled-components";

interface QuantitySelectorContainerProps {
  size?: 'small'| 'medium',
}

export const QuantitySelectorContainer = styled.div<QuantitySelectorContainerProps>`
  flex: 1;
  background: ${({ theme }) => theme.colors['base-button']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 6px;
  height: 2.375rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({theme }) => theme.colors["base-title"]};
  }

  & focus {
    outline: none;
  }

  ${({size}) => size === 'medium' && css`
    padding: 0.5rem;
  `}

  ${({size}) => size === 'small' && css`
    padding: 0.3rem 0.5rem;
  `}
`

export const SelectorButton = styled.button.attrs({
  type: 'button'
})`

  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${({theme }) => theme.colors["brand-purple"]};
  transition: 0.15s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({theme}) => theme.colors["brand-purple-dark"]}
  }

`