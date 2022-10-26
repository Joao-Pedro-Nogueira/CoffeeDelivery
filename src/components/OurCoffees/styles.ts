import styled from "styled-components";

export const OurCoffeesContainer = styled.section`
  margin-left: auto;
  margin-right: auto;
  max-width: 70rem;
  width: 70rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    color: ${({theme }) => theme.colors["base-subtitle"]};
    font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
    margin-bottom: 3.5rem;
  }
`