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
        <a href="http://localhost:3006/">
          <button>Regresar</button>
        </a>
      </ContainerButton>
    </div>
  )
}