import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../../image/logo/logo189x65.png';

const StyledMenu = styled.menu`
    margin: 0;
    padding: 0;
`;

const StyledMenuBar = styled.div`
    position: fixed;
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

const StyledLink = styled.h3`
    &:hover {
        color: black;
        margin-bottom: -3px;
        border-bottom: 3px solid black;
    }
`;

const linkStyle = {
    padding: "12px 30px 12px 30px",
    color: "white",
    textDecoration: "none",
};

const MenuLink = function(props) {
    return(
        <NavLink className="linkClass" style={linkStyle} activeClassName={"m_selected"} to={props.src}>
            <StyledLink>{props.title}</StyledLink>
        </NavLink>
    )
};

export default function Menu(props) {
    return (
        <StyledMenu id={"menu"}>
            <StyledMenuBar id={"menuBar"}>
                <StyledMenuLogo id={"menuLogo"} opa={props.opa}>
                    <a className="linkClass" href="/"><img src={logo} alt="logo" /></a>
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
