import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../../image/logo/logo189x65.png';

import $ from 'jquery';

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
    useEffect(function(){
        var stHeader = $("#headerDiv")[0].scrollHeight,
            stMenu = $("#menuBar")[0].scrollHeight,
            stM = stHeader - stMenu,
            mt = -stMenu,
            fst = 0,
            opa = props.opa;

        if(!$(this).scrollTop()) opa = props.opa;

        $(window).scroll(function() {
            var st = $(this).scrollTop();

            if(st > stM){
                if(fst > st) {
                    $("#menuBar").css({
                        position: "fixed",
                        top: mt
                    });
                    $("#menuLogo").css({
                        opacity: opa
                    });

                    mt += 10;
                    opa += 0.05;
                    if(mt >= 0) mt = 0;
                    if(opa >= 1) opa = 1;
                }else{
                    if(fst > stHeader){
                        $("#menuBar").css({
                            position: "fixed",
                            top: mt
                        });
                        $("#menuLogo").css({
                            opacity: opa
                        });
    
                        mt -= 10;
                        opa -= 0.2;
                        if(mt <= -stMenu) mt = -stMenu;
                        if(opa <= 0) opa = 0;
                    }
                }
            }else{
                $("#menuBar").css({
                    position: "relative",
                    top: 0
                });
                $("#menuLogo").css({
                    opacity: opa
                });
    
                mt = -stMenu;
                opa -= 0.1;
                if(opa <= 0) opa = 0; 
            }
            fst = st;
        })
    })
    return (
        <StyledMenu id={"menu"}>
            <StyledMenuBar id={"menuBar"}>
                <StyledMenuLogo id={"menuLogo"} opa={props.opa}>
                    <a className="linkClass" href="/"><img src={logo} alt="logo" /></a>
                </StyledMenuLogo>
                <StyledMenuLinks>
                    <MenuLink src={"/products"} title={"PRODUCTS"} opa={1}/>
                    <MenuLink src={"/technology"} title={"TECHNOLOGY"} />
                    <MenuLink src={"/contact"} title={"CONTACT"} />
                    <MenuLink src={"/service"} title={"SERVICE"} />
                </StyledMenuLinks>
            </StyledMenuBar>
        </StyledMenu>
    )
}
