import styled from "styled-components";

export const CardContainer = styled.div`
  height: 450px;
  width: 320px;
  margin: 14px auto;
  background-color: white;
  border-radius: 5px;
`

export const ImgContainer = styled.div`  
  height: 200px;  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid #f5f5f5;
  /* background-color: #4f4f54; */
  & img {
    width: auto;
    height: auto;
    max-height: 200px;
    max-width: 250px;
    box-shadow: 0px 0px 24px 0px rgba(0,0,0.1),0px 10px 35px 0px rgba(0,0,0,0.2);
  }
`

export const Titulo = styled.div`  
  padding: 14px;
  max-width: 292px; 
  & p {   
    max-width: 292px; 
    font-size: 14px;
    overflow: hidden;
  }
`
export const ContainerPrecio = styled.div`
  margin-bottom: 7px;
  & span {
    font-size: 20px;    
  }
`

export const Name = styled.div`
  height: 34px;
  & p {
    overflow: hidden;
    max-height: 34px;
  }
`

export const ContainerCarillas = styled.div`
  padding-top: 7px; 
`

export const ContainerOpciones = styled.div`
padding: 7px 0;
  & span {
    
    font-size: 13px;
    color: white;
    background-color: #69B4F7;
    padding: 2px 4px;
    border-radius: 3px;
  }
`

export const ContainerDuplex = styled.div`
  position: relative;
  padding-top: 7px;  
  display: flex;
  justify-content: space-between;
  height: 30px;
  & span {
    font-size: 14px;
    line-height: 30px;    
    padding-right: 14px;
  }
  & input:nth-child(1) {
    top: 10px;
    left: 50px;
  }
  & input:nth-child(3){
    top: 10px;
    left: 200px;
  }
`

export const Input = styled.input`
  cursor: pointer;
  width: 50px;
  height: 25px;
  opacity: 0;
  position: absolute;
  
  z-index: 1;
  margin: 0px;
  &:checked + label {
    /* background: #151515;
    color: #fff; */
  }
  &:checked + label::after {
    content: attr(data-on);
    left: 68px;
    background: #69B4F7;
  }
  &:checked + label::before {
    content: attr(data-off);
    right: auto;
    left: 15px;
  }
`

export const BottonSwitch = styled.label`
  margin: 0px;
  width: 140px;
  height: 30px;
  background: #E0E0E0;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  /*box-shadow: 0px 0px 8px 0px rgba(17, 17, 17, 0.34) inset;*/
  display: block;
  font-size: 10px;
  line-height: 15px;
  color: #424242;
  font-weight: 500;
  &::before {
    content: attr(data-on);
    position: absolute;
    font-size: 10px;
    font-weight: 500;
    top: 7px;
    right: 16px;
  }
  &::after{
    content: attr(data-off);
    width: 70px;
    height: 16px;
    background: #fff;
    border-radius: 5px;
    position: absolute;
    left: 2px;
    top: 2px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0px 0px 6px -2px #111;
    padding: 5px 0px;
  }
`

export const ContainerEncargar = styled.div`
  height: 100%;
  padding-top: 14px;
  width: 292px;
  display: flex;
  justify-content: space-between;
  & button {
    width: 140px;
    position: relative;
    cursor: pointer;
    border-radius: 5px;
    font-size: 20px;
    color: white;
    background-color: #00a650;
    padding: 7px 10px 7px 50px;
    box-shadow: 0px 0px 5px 0px rgba(222, 223, 225); 
  }
  & path {
    fill: white;
  }
  & svg {
    position: absolute;
    stroke: white;
  }
  & div:nth-child(1) svg {
    top: -5px;
    left: 2px;
  }
  & div:nth-child(2) svg {
    top: -13px;
    left: 5px;
  }
  & label {
    cursor: pointer;
  }
`

export const ButtonRelative = styled.div`
  
`
