import styled from "styled-components";

export const InfoItensConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
`

interface InfoItemProps {
  iconColor: string;
}

export const IconContainer = styled.div<InfoItemProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  padding: 0.5rem;
  color: ${({theme}) => theme.colors["base-background"]};

  background-color: ${({ iconColor }) => iconColor };
`