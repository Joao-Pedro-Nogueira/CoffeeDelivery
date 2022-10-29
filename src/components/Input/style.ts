import styled from "styled-components";

export const InputContainer = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors["base-input"]};
  border: 2px solid ${({theme}) => theme.colors["base-button"]};
  padding: 0.75rem;
  transition: 0.15s;
  
  &:focus {
    border-color: ${({theme}) => theme.colors["brand-yellow-dark"]};
  }

  &::placeholder {
    color: ${({theme}) => theme.colors["base-label"]};
    font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
  }

  color: ${({theme}) => theme.colors["base-text"]};
  font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
  font-size: 0.75rem;
`