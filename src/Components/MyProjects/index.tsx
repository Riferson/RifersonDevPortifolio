import React from "react";
import {Container, ContainerTitle, Title, ContainerProjects } from './styled'
import CardProject from '../CardProject'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function MyProject () {
  return (
        <Container>
            <ContainerTitle>
                <Title> Conheça Alguns dos meus projetos!</Title>
            </ContainerTitle>
            <ContainerProjects>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
            </ContainerProjects>
        </Container>
  )
}