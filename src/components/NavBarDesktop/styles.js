import styled from "styled-components";

export const ContainerNav = styled.div`
  font-family: Courier;
  width: 100%;
  background-color: #272729;
  height: 94px;
  color: white;
  @media (max-width: 890px){
    display: none;
  }
  `
export const ResizeContainerNav = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1080px;
  height: 64PX;
  margin: 0 auto;
`
export const Logotipo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 215px;
  height: 100%;
`

export const ContainerSearch = styled.div`  
  height: 100%;
  display: flex;
  align-items: center;
  width: 540px;
`

export const ContainerUsuario = styled.div`  
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 269px;  
  height: 64px;
  padding-right: 52px;
  & button {
    cursor: pointer;
    color: white;
    font-size: 1.2rem;
  }
  & svg {
    
    fill: white;
  }
`
export const ContainerCategorias = styled.div`
  height: 30px;
  max-width: 1080px;
  margin: 0 auto;
`
export const ListaMenu = styled.ul`
  padding-left: 215px;
  list-style: none;
  height: 100%;
  align-items: center;    
  & li {
    cursor: pointer;
    color: #d4e5ff;
    display: inline-block;
    padding-right: 24px;
    &:hover {
      color: #fff;
    }
  }
`
