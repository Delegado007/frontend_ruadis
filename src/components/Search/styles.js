import styled from "styled-components";

export const SearchForm = styled.div`
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