import styled from "styled-components"

export const CompleteOrderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
`

export const FormCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  padding: 2.5rem;

  background-color: ${({theme}) => theme.colors["base-card"]};
  border-radius: 6px;
`

export const CardTitle = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: flex-start;
  }
`
