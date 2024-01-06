import styled from "styled-components"


interface LogoTextProps{
    textColor?: string;
};

export const Container = styled.div`
    width: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
`;

export const ContainerLogo = styled.div`
    width: 100%;
`;

export const TextLogo = styled.a<LogoTextProps>`
    color:${(props) => props? props.textColor : '#6E4BF8'} ;
    font-family: Kaisei Decol;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height:normal;
`;

export const ContainerNav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;

`;

export const TextItem = styled.a`
    color: #FFF;
    text-align: center;
    font-family: Lily Script One;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0 1rem;
    white-space: nowrap;
`;
