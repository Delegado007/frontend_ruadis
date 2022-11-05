import styled from "styled-components";

export const ContainerGrid = styled.div`
  display: grid;
  max-width: 1080px;
  /* min-height: 100vh; */
  margin: auto;  
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);    
  }
  @media (max-width: 690px) {
    grid-template-columns: repeat(1, 1fr);    
  }
`