import React from "react";
import ImageWelcome from '../../Assets/Images/Welcome.png';

import {Container,ContainerText,TextPrincipal,TextSecundary,ContainerImage,Img} from './styled';

export default function Welcome(){
    return(
        <Container>
            <ContainerText>
                <TextPrincipal>Riferson Ferreira</TextPrincipal>
                <TextSecundary>Desenvolvedor Web Full Stack</TextSecundary>
            </ContainerText>
            <ContainerImage>
                <Img src={ImageWelcome} alt={'Bem-vindo!'} />
            </ContainerImage>
        </Container>
    )
}