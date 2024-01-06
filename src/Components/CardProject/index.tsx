import React from "react";
import WebMobile from '../../Assets/Images/WebMobile.png';

import {Container,ContainerImg,ImgProject,ContainerTitle,Title,Description,ButtonReadMore} from './styled';

export default function CardProject(){
    return(
        <Container>
            <ContainerImg>
                <ImgProject src={WebMobile} alt={'Web e mobile!'}/>
            </ContainerImg>
            <ContainerTitle>
                <Title>8-Puzzle</Title>
                <Description>Um jogo de puzzle no qual  o objetivo e alinhas 8 blocos na sequencia correta.</Description>
            </ContainerTitle>
            <ButtonReadMore>Saiba Mais!</ButtonReadMore>
        </Container>
    )
}