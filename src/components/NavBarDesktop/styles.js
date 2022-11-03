import styled from "styled-components";

export const ContainerNav = styled.div`
  font-family: Courier;
  width: 100%;
  background-color: #272729;
  height: 94px;
  color: white;
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
  width: 215px;
  height: 100%;
`

export const ContainerSearch = styled.div`  
  height: 100%;
  display: flex;
  align-items: center;
  width: 540px;
  & form {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }
  & input {
    font-size: 1.1rem;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    border-radius: 3px;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    padding-left: 35px;
    padding-right: 80px;
  }
  `

export const Search = styled.div`
  position: relative;
  width: 100%;
  height: 34px;  
  background-color: #fff;
  border-radius: 5px;
  & svg {
    position: absolute;
    left: 7px;
    top: 7px;
    width: 20px;
    height: 20px;
  }
  `

export const ButtonSearch = styled.button`
  width: 70px;
  position: absolute;
  right: 0;
  background-color: #69B4F7;
  height: 34px;
  font-size: 1.1rem;
  line-height: inherit;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`

export const ContainerUsuario = styled.div`  
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 269px;  
  height: 64px;
  padding-right: 52px;
  & button {
    color: white;
    font-size: 1.2rem;
  }
  & svg {
    position: absolute;    
    top: 7;
    right: 0;
    color: white;
    stroke: white;
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
