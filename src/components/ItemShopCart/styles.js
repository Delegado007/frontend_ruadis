import styled from "styled-components";


export const ContainerItem = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 167px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #C2C2C2;
  & svg {
    
  }
  `

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px;
  width: 150px;
  height: 150px;
  min-width: 150px;
  `

export const Img = styled.img`
  width: auto;
  height: fit-content;
  max-height: 150px;
  max-width: 150px;
`

export const ContainerOpciones = styled.div`
  width: 100%;
  margin: 12px 7px;
`

export const ButtonDelete = styled.button`
  position: absolute;
  right: 12px;
  top: 14px;
  width: 23px;
  height: 23px;
`

export const Span = styled.span`
  position: absolute;
  bottom: 7px;
  right: 7px;
  /* font-weight: bold; */
`


