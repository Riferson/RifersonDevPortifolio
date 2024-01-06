import React from "react";
import {Container,ContainerLogo,TextLogo,ContainerNav,TextItem} from './styled';

export default function NavigationHeader(){
    return(
        <Container>
            <ContainerLogo>
                <TextLogo textColor={'#FFF'}> &lt; </TextLogo>
                <TextLogo textColor={'#6E4BF8'}>Riferson</TextLogo> 
                <TextLogo textColor={'#FFF'}> &gt; </TextLogo>
            </ContainerLogo>
            <ContainerNav>
                <TextItem>Home</TextItem>
                <TextItem>Projetos</TextItem>
                <TextItem>Sobre-mim</TextItem>
                <TextItem>Contato</TextItem>
            </ContainerNav>
        </Container>
    )
}