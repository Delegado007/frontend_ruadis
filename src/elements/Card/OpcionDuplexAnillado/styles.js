import styled from "styled-components";

export const ContainerDuplex = styled.div`
  position: relative;
  padding-top: 7px;  
  display: flex;
  justify-content: space-between;
  height: ${({ theme }) => theme.heightSwhitch ? `${theme.heightSwhitch}` : '30px'};
  flex-direction: ${({ theme }) => theme.heightSwhitch ? `${theme.fx_direction}` : 'row'};
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
  display:none;
  
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
