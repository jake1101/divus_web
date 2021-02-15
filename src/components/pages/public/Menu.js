import React from 'react'
import styled from 'styled-components';

import logo from '../../../image/logo/logo189x65.png';

const StyledMenu = styled.menu`
    margin: 0;
    padding: 0;
`;

const StyledMenuBar = styled.div`
    position: relative;
    width: 100%;
    padding: 44px 48px;
    background-color: rgba(0,0,0,0.5);
    z-index: 99;
`;

const StyledMenuLogo = styled.div`
    position: absolute;
    top: 20px;
    opacity: ${props => props.opa};
`;

const StyledMenuLinks = styled.div`
    display: flex;
    justify-content: center;
`;

const linkStyle = {
    padding: "12px 30px 12px 30px",
    color: "white",
    textDecoration: "none",
};

const MenuLink = function(props) {
    return(
        <a style={linkStyle} href={props.src}><h3>{props.title}</h3></a>
    )
};

export default function Menu() {
    return (
        <StyledMenu id={"menu"}>
            <StyledMenuBar id={"menuBar"}>
                <StyledMenuLogo id={"menuLogo"} opa={0}>
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </StyledMenuLogo>
                <StyledMenuLinks>
                    <MenuLink src={"/products"} title={"PRODUCTS"} />
                    <MenuLink src={"/technology"} title={"TECHNOLOGY"} />
                    <MenuLink src={"/contact"} title={"CONTACT"} />
                    <MenuLink src={"/service"} title={"SERVICE"} />
                </StyledMenuLinks>
            </StyledMenuBar>
        </StyledMenu>
    )
}
