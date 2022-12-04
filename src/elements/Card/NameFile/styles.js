import styled from "styled-components"

export const Name = styled.div`

  /* height: 34px; */
  height: ${({ theme }) => theme.height ? `${theme.height};` : '34px;'}
  & p {
    overflow: hidden;
    max-height: 34px;
  }
`