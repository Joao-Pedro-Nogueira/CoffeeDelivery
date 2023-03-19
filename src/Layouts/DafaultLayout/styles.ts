import styled from "styled-components";

export const LayoutContainer = styled.div`
  .container {
    width: 100%;
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 768px) {
      width: 90vw;
    }
  }
`;