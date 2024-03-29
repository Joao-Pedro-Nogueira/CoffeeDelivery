import styled, { css } from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem
`;

export const AddressFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    column-gap: 0.75rem;
    row-gap: 1rem;
    grid-auto-flow: dense;
    .cep {
      grid-column: span 3;
      max-width: 12.5rem;
    }
    .street {
      grid-column: span 3;
    }
    .complement {
      grid-column: span 2;
    }
    
  }
`;

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  > p {
    grid-column: span 3;
    color: ${({ theme }) => theme.colors["base-error"]};
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;