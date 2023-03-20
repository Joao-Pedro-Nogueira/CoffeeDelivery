import styled from "styled-components";
import introBackgroundImg from '../../../../assets/intro-background.svg'
import { rgba } from 'polished'
import { TitleText } from "../../../../components/TextsComponents";

export const IntroContainer = styled.section`
  width: 100%;
  min-height: 34rem;
  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-background"]} 0%,
        ${rgba(theme.colors["base-background"], 0.05)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;
  @media screen and (max-width: 768px) {
    background: none;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  `

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  
  @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      gap: 2rem;
      margin-top: 1rem;

      div {
        text-align: center;
      }

      img {
        width: 100%;
      }
  }
`

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const InfosContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
  justify-content: flex-start;
`