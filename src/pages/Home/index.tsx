import { Intro } from "./components/Intro";
import { Menu } from "./components/Menu";

import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <Intro/>
      <Menu/>
    </HomeContainer>
  )
}