import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;
  h1 {
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    margin-top: 3rem;
    align-items: center;
    text-align: center;
    section {
      flex-direction: column-reverse;

      img {
        width: 80%;
        margin-bottom: 1.5rem;
      }
    }
  }
`;

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${({ theme }) => theme.colors["base-background"]};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
  
  @media screen and (min-width: 768px){
    min-width: 32rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

`;