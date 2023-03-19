import styled from "styled-components";

interface TitleTextProps {
  size?: 'xl' | 'l' | 'm' | 's' | 'xs',
  color?: 'title' | 'subtitle' | 'text',
  weight?: string | number,
  marginTop?: number,
  marginBottom?: number
}

export const TitleText = styled.h1<TitleTextProps>`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme, size }) => theme.textSizes[`title-title-${size ?? 'l'}`]};
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  line-height: 130%;
  font-weight: ${({ weight }) => [`${weight ?? 800}`]};
  margin-top: ${({ marginTop }) => [`${marginTop ?? 0}rem`]};
  margin-bottom: ${({ marginBottom }) => [`${marginBottom ?? 0}rem`]};

  @media screen and (max-width: 768px) {
    font-size: ${({ theme, size }) => theme.textSizes[`title-title-mobile-${size ?? 'm'}`]};
  }
`

interface RegularTextProps {
  size?: 'l' | 'm' | 's',
  color?: 'label' | 'subtitle' | 'text' | 'title',
  weight?: string | number,
  marginTop?: number,
  marginBottom?: number
}

export const RegularText = styled.p<RegularTextProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme, size }) => theme.textSizes[`text-regular-${size ?? 'm'}`]};
  font-weight: ${({ weight }) => [`${weight ?? 400}`]};
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  line-height: 130%;
  margin-top: ${({ marginTop }) => [`${marginTop ?? 0}rem`]};
  margin-bottom: ${({ marginBottom }) => [`${marginBottom ?? 0}rem`]};

  @media screen and (max-width: 768px) {
    font-size: ${({ theme, size }) => theme.textSizes[`text-regular-mobile-${size ?? 'm'}`]};
  }
`