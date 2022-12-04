import React from "react";
import { Card } from "../Card";
import { ContainerGrid } from './styles'
import { useSelector, shallowEqual } from "react-redux";

export const GridCard = () => {
  const files = useSelector((state) => state.files.files, shallowEqual);

  return (
    <ContainerGrid id="container_results">
      {files.map((item) => (
        <Card key={item.id} item={item}></Card>
      ))}
    </ContainerGrid>
  )
}