import styled from "styled-components";

export const HomeIntroContainer = styled.section`
    
    #home-div {
    max-width: 90rem; 
    margin: 0 auto;
    padding: 5.75rem 10rem;
    display: flex;
    justify-content: space-between;
    gap: 3.5rem;
  }
  
  #content-home-div {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
    align-items: flex-start;
  }
  
  #title-home-div {
    margin-top: 0.125rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  #title-home-div h1 {
    font-family: 'Baloo 2', cursive;
    font-size: ${({ theme }) => theme.textSizes["title-title-xl"]};
    color: ${({theme }) => theme.colors["base-title"]};
  }

  #title-home-div p {
    font-family: 'Roboto', sans-serif;
    font-size: ${({ theme }) => theme.textSizes["text-regular-l"]};
    color: ${({theme }) => theme.colors["base-subtitle"]};
  }

  #infos-home-div {
    display: flex;
    gap: 2.5rem;
  }

  .info-column-div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .info-row-column {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  .info-row-column p {
    font-family: 'Roboto', sans-serif;
    font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
    color: ${({theme }) => theme.colors["base-text"]};
  }
`