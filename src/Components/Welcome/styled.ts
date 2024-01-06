import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100vh;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TextPrincipal = styled.a`
    color: #6E4BF8;
    text-align: center;
    font-family: Flamenco;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const TextSecundary = styled.a`
    color: #FFF;
    text-align: center;
    font-family: Kaisei Decol;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const ContainerImage = styled.div`
    width: 485px;
    height: 408px;
    flex-shrink: 0;
`;

export const Img = styled.img``;
