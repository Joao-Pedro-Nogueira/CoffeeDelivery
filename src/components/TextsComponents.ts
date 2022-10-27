import styled from "styled-components";

interface TitleTextProps {
  size?: 'xl' | 'l' | 'm' | 's' | 'xs',
  color?: 'title' | 'subtitle' | 'text',
  weight?: string | number
}

export const TitleText = styled.h1<TitleTextProps>`
  font-family: ${({theme})=> theme.fonts.title};
  font-size: ${({theme, size})=> theme.textSizes[`title-title-${size ?? 'l'}`]};
  color: ${({theme, color})=> theme.colors[`base-${color ?? 'title'}`]};
  line-height: 130%;
  font-weight: ${({ weight })=> [`${weight ?? 800}`]};
`

interface RegularTextProps {
  size?: 'l' | 'm' | 's',
  color?: 'label' | 'subtitle' | 'text',
  weight?: string | number
}

export const ReglarText = styled.p<RegularTextProps>`
  font-family: ${({theme})=> theme.fonts.regular};
  font-size: ${({theme, size, weight})=> theme.textSizes[`text-regular-${size ?? 'm'}`]};
  font-weight: ${({weight}) => [`${weight ?? 400}`]};
  color: ${({theme, color})=> theme.colors[`base-${color ?? 'title'}`]};
  line-height: 130%;
`