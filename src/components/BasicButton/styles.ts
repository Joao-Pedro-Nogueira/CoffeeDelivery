import styled, { css } from "styled-components";

export const BasicButtonContainer = styled.button`
  width: 100%;
  padding: 0.75rem 0.5rem;
  color: ${({theme}) => theme.colors["base-white"]};
  font-weight: 700;
  background-color: ${({theme}) => theme.colors["brand-yellow"]};
  font-size: ${({theme}) => theme.textSizes["components-button-g"]};
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  transition: 0.15s;
  line-height: 1.3rem;
  margin-top: 1.75rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({theme}) => theme.colors["brand-yellow-dark"]};
  }
`