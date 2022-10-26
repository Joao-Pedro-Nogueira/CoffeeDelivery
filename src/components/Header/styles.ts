import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  
  #header-div {
    max-width: 70rem;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors["base-background"]};
  }

  #header-secondary-div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  #local-div {
    background: ${({ theme }) => theme.colors["brand-purple-light"]};
    padding: 0.5rem;
    gap: 0.25rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    font-weight: ${({theme }) => theme.fonts.regular};
    font-size: ${({theme }) => theme.textSizes["text-regular-s"]};
    color: ${({theme }) => theme.colors["brand-purple-dark"]};
  }

  #cart-div {
    background: ${({ theme }) => theme.colors["brand-yellow-light"]};
    padding: 0.5rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`