import styled, { ThemeConsumer } from "styled-components";

export const SelectedCoffeeItemContainer = styled.div`

  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({theme}) => theme.colors["base-button"]};

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      height: 4rem;
      width: 4rem;
    }
  }

  > p {
    align-self: flex-start;
    font-weight: 700;
  }
`

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({theme}) => theme.colors["base-text"]};
  font-size: 0.75rem;
  height: 100%;
  border: none;
  background-color: ${({theme}) => theme.colors["base-button"]};
  padding: 0 0.5rem;
  border-radius: 6px;
  transition: 0.15s;

  &:hover {
    background-color: ${({theme}) => theme.colors["base-hover"]}
  }

  svg {
    color: ${({theme}) => theme.colors["brand-purple"]};
  }
`