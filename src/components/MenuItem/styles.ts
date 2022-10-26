import styled from "styled-components";

export const StyledMenuItem = styled.div`

display: flex;
flex-direction: column;
align-items: center;
width: 16rem;
background-color: ${({theme}) => theme.colors["base-card"]};
border-radius: 6px 36px 6px 36px;
padding: 1.25rem;

img {
  margin-top: calc(1rem - 2.25rem - 1.25rem);
  margin-bottom: 0.75rem;
}

.tag {
  margin-bottom: 1rem;
  background-color: ${({theme}) => theme.colors["brand-yellow-light"]};
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  color: ${({theme}) => theme.colors["brand-yellow-dark"]};
  font-size: ${({theme}) => theme.textSizes["components-tag"]};
  font-weight: bold;
}

h3 {
  font-family: ${({theme}) => theme.fonts.title };
  font-size: ${({theme}) => theme.textSizes["title-title-s"]};
  color: ${({theme}) => theme.colors["base-subtitle"]};
  margin-bottom: 0.5rem;
}

#desciption-div {
  font-family: ${({theme}) => theme.fonts.regular };
  font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
  color: ${({theme}) => theme.colors["base-label"]};
  margin-bottom: 2.0625rem;
  text-align: center;
}

#add-to-cart-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

#add-to-cart-div p span {
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
  color: ${({theme}) => theme.colors["base-text"]};
}

#add-to-cart-div p {
  font-family: ${({theme}) => theme.fonts.title};
  font-size: ${({theme}) => theme.textSizes["title-title-m"]};
  color: ${({theme}) => theme.colors["base-text"]};
}

#buttons-cart-div {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
}

#buttons-cart-div #select-quantity-div {
  display: flex;
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  line-height: 130%;
  align-items: center;
  background-color: ${({theme}) => theme.colors["base-button"]};
  font-size: ${({theme}) => theme.textSizes["text-regular-m"]};
  color: ${({theme}) => theme.colors["base-text"]};
}

#buttons-cart-div img {
  margin: 0;
}

#add-to-cart-button {
  height: 2.375rem;
  width: 2.375rem;
  padding: 0.5rem;
  background-color: ${({theme})=> theme.colors["brand-purple-dark"]};
  border-radius: 6px;
}
`