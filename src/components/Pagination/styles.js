import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 3.8rem;
  width: 100%;
  margin: 14px 0 14px 0;
`
export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.8rem;  
  padding: 0 7px;
  border-radius: 0.6rem;
  background: #ffffff;
  box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);
  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.6rem 0;
    font-size: 1.1rem;
    width: 2.5rem; 
    height: 2.5rem;
    cursor: pointer;
    &.active {
      color: #ffffff;
      background: #69B4F7;
      font-weight: 600;
      border: 1px solid #69B4F7;
      border-radius: 5px;
    }
    &.svg-controller {
      width: 1.8rem;
    }
  }
  & svg {
    fill: #69B4F7;
  }
`









export const ButtonPagination = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 3.5px;
  height: 38px;
  width: 38px;
  & button {
    background-color: #8BC5F9;
    font-size: 1.2rem;
    border-radius: 5px;
    width: 38px;
    height: 100%;
    border: solid 1px #272729;
    color: #353540;
    cursor: pointer;
    &.active {
      box-shadow: rgb(39, 39, 41) 0px 3px 7px inset;
      background-color: #fff;
    }
  }
  & button:disabled {
    opacity: 0.35;
  }
  & a {    
    height: 38px;
    width: 38px;
  }
`
