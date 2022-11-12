import styled from "styled-components";

export const ContainerNavBarPhone = styled.div`
width: 100%;
  @media (min-width: 891px) {
    display: none;
  }
`

export const ContainerMenu = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  background-color: #272729;  
`
export const ContainerLogo = styled.div`
  position: absolute;
  top: 13px;
  left: calc(50% - 53px);
  width: 106px;
  height: 26px;
`

export const ContainerSearch = styled.div`
  width: 100%;
  height: 48px;
  background-color: #272729;
  & div {
    width: auto;
    margin: 0 10px 14px 10px;
  }
`

export const Menu = styled.div`
  width: 25px;
  height: 20px;
  position: fixed;
  top: 14px;
  left: 14px;
  & div {    
    width: 25px;
    height: 2px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 7px;
    transform-origin: 2px center;
    transition: all 0.3s linear 0s;
  }
  & button div:nth-child(1) {    
    transform: ${({ open }) => open ? 'rotate(39deg); width: 32px;' : 'rotate(0)'};
  }
  & button div:nth-child(2) {
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1};
  }
  & button div:nth-child(3) {    
    transform: ${({ open }) => open ? 'rotate(-39deg); width: 32px;' : 'rotate(0)'};    
  }
`
export const Carrito = styled.div`
  position: absolute;
  right: 14px;
  top: 12px;
  & button {
    cursor: pointer;
  }
  & svg {
    fill: white;    
  }
`

export const ItemsInCarro = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0px;
  top: -2px;
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  & p {
    color: white;
    font-size: 15px;
    font-weight: bold;
  }
`

export const ContainerOpenMenu = styled.div`
  display: flex;  
  background-color: #272729;
  
`

export const Ul = styled.ul`
  
  margin: 14px 10px 14px 10px;
  width: 100%;
`

export const Li = styled.li`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: white;
  height: 38px;
  font-size: 18px;
  border-top: 1px solid #45494E;
`