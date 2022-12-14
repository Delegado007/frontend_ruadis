import React from "react";
import { ContainerFlex, SVG, SpinnerContainer, SpinnerPath } from "./styles";

export const Loading = () => {
  return (
    <>
      <ContainerFlex className='container'>

        <SpinnerContainer className='spinner-container'>
          <SpinnerPath className="spinner-path">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </SpinnerPath>
        </SpinnerContainer>
      </ContainerFlex>

      <SVG xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </SVG>
    </>
  )
}