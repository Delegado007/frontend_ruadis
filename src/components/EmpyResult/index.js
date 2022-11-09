import React from "react";
import { NoResultLogo } from "../NoResultLogo";
import { ContainerEmptyResults, ContainerButton } from './styles'

export const EmptyResult = () => {
  return (
    <div>
      <ContainerEmptyResults>
        <NoResultLogo />
        <h2>Upps! Ningún Resultado</h2>
      </ContainerEmptyResults>
      <ContainerButton>
        <a href="https://stellular-unicorn-408b27.netlify.app/">
          <button>Regresar</button>
        </a>
      </ContainerButton>
    </div>
  )
}