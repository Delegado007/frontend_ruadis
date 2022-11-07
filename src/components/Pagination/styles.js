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
  `

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.6rem 0;
  font-size: 1.1rem;
  width: 2.8rem; 
  height: 2.5rem;
  &.active {
    color: #ffffff;
    background: #69B4F7;
    font-weight: 600;
    border: 1px solid #69B4F7;
    border-radius: 5px;
  }
  &.svg-controller {
    width: 3rem;
  }
  & svg {
    fill: #69B4F7;
  }
  `
export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 100%;
  &:disabled{
    cursor: auto;
    & svg {
      fill: #bababa;
    }
  }
`