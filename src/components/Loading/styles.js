import styled, { keyframes } from "styled-components";

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
` 


export const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`

export const SVG = styled.svg`
  display: none;
`
export const SpinnerContainer = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
  filter: url(#gooey);
`

export const SpinnerPath = styled.div`
  position: relative;
  left: calc(50% - 5rem);
  top: 40%;
  width: 10rem;
  height: 10rem;
  & > * {
    animation: ${spinner} 3s infinite;

    &::after {
      content: " ";
      display: block;
      position: absolute;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
    &:nth-child(1) {
      animation-delay: .5s;
      &:after {
        background: #4285F4;
       }
     }
    
     &:nth-child(2) {
       animation-delay: 1s;
       &:after {
          background: #DB4437;
       }
     }
    
     &:nth-child(3) {
      animation-delay: 1.5;
       &:after {
          background: #F4B400;
      }
    }
     &:nth-child(4) {
       animation-delay: 2s;
       &:after {
          background: #0F9D58;
       }
     }
  }
`

  
//   > * {
//     animation: spinner 3s infinite;
    
//     &:after {
//       content: " ";
//       display: block;
//       position: absolute;
//       width: 2rem;
//       height: 2rem;
//       border-radius: 50%;
//     }
    
//     &:nth-child(1) {
//       animation-delay: .5s;
//       &:after {
//       background: #4285F4;
//       }
//     }
    
//     &:nth-child(2) {
//       animation-delay: 1s;
//       &:after {
//         background: #DB4437;
//       }
//     }
    
//     &:nth-child(3) {
//       animation-delay: 1.5;
//       &:after {
//         background: #F4B400;
//       }
//     }
//     &:nth-child(4) {
//       animation-delay: 2s;
//       &:after {
//         background: #0F9D58;
//       }
//     }
//   }
// }

// @keyframes spinner {
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// }

