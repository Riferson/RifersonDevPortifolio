import React from "react";
import NavigationHeader from "../../Components/NavigationHeader";
import {Container,ContainerHeader,ContainerWelcome} from './styled';
import Welcome from "../../Components/Welcome";
import MyProject from "../../Components/MyProjects";

export default function Home(){
    return(
    <Container>
        <ContainerHeader>
            <NavigationHeader/>
        </ContainerHeader>
        <ContainerWelcome>
            <Welcome/>
        </ContainerWelcome>
        <MyProject/>
    </Container>
    )
}