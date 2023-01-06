import React from "react";
import {
  ContainerDuplex,
  BottonSwitch,
  Input,
} from './styles';

export const OpcionDuplexAnillado = ({ id, anillado, duplex, setDuplex, setAnillado }) => {
  const handleDuplex = (value) => {
    setDuplex(value)
  }

  const handleAnillado = (value) => {
    setAnillado(value)
  }
  return (
    <ContainerDuplex>
      <Input type="checkbox" name="duplex" id={`duplex_mode_${id}`} defaultChecked={duplex} onChange={({ target }) => handleDuplex(target.checked)} />
      <BottonSwitch htmlFor={`duplex_mode_${id}`} data-on="Doble faz" data-off="Simple faz"></BottonSwitch>
      <Input type="checkbox" name="anillado" id={`anillado_mode_${id}`} defaultChecked={anillado} onChange={({ target }) => handleAnillado(target.checked)} />
      <BottonSwitch htmlFor={`anillado_mode_${id}`} data-on="Anillado" data-off="Sin anillar"></BottonSwitch>
    </ContainerDuplex>
  )
}