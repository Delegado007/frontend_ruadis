import styled from "styled-components";

export const ContainerEmptyResults = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 40px;
`

export const ContainerButton = styled.div`
  display: flex;
  padding-top: 14px;
  justify-content: center;
  & button {
    height: 34px;
    width: 100px;
    background-color: #69B4F7;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
`