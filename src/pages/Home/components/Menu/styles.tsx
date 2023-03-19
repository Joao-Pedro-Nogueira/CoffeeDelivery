import styled from "styled-components";

export const MenuContainer = styled.section`
  max-width: 100%;
  margin-top: 2rem;
`

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 2.5rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`