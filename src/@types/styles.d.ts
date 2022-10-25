// Aqui dentro apenas códigos de definição de typeScript
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

export type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}