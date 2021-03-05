import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../image/logo/circleLogo.png';

const StyledMenuBar = styled.div`
  position: absolute;
  top: ${props => props.top + (props.p * 2) + props.m + props.b}px;
  left: 0;
  width: 100%;
  height: 75px;
  background-color: black;
  color: white;
  z-index: 301;
`;

const StyledLogoDiv = styled.div`
  display: ${props => props.showLogo};
  height: 100%;
`;

const StyledLogo = styled.img`
  width: 70px;
  margin: 0 30px 0 0;
`;

const StyledMenuLinks = styled.div`
  display: flex;
  justify-content: center;
  margin: 2px 0 0 0;
`;

const StyledLinks = styled.div`
  margin: 18px 0 0 0;
`;

const StyledHiddenMenu = styled.div`
  display: none;
  color: white;
  margin: 45px 80px 0 0;
  text-align: right;
`;

const StyledHiddenMenuBtn = styled.h2`
    position: relative;
    margin: 0 0 0 0;
    font-size: 40px;
    display: inline-block
`;

const StyledHiddenMenuLinks = styled.div`
    position: absolute;
    top: 100px;
    right: 230px;
    text-align: left;
    width: 0;
    line-height: 40px;
    visibility: ${props => props.vsb}
`;

const linkStyle = {
  padding: "0 30px 0 30px",
  color: "#fff",
  textDecoration: "none",
  display: "inline-block",
};

const MenuLink = function (props) {
  return (
    <NavLink style={linkStyle} activeClassName={"m_selected"} to={props.src} onClick={props.clickEvent}>
      <h2 className="linkClass">{props.title}</h2>
    </NavLink>
  )
};

const Menu = ({ topPos, showLogo, p, m, b }) => {
  const [vsb, setVsb] = useState("hidden");
  const [top, setTop] = useState(0);
  const [pos] = useState({ top: 0, left: 0, behavior: 'smooth' });

  const showHiddenBtn = () => {
    setVsb(vsbState => vsbState === "hidden" ? vsbState = "visible" : vsbState = "hidden");
  }

  const scrollToTop = () => {
    window.scrollTo(pos);
  }

  useEffect(() => {
    var menu = document.querySelector("#menu");
    var headerH = topPos + (p * 2);
    var menuH = menu.offsetHeight;
    var fst = 0;
    var ctr = 0;

    setTop(headerH);

    window.addEventListener("scroll", () => {
      scrolled();
    });

    const scrolled = function () {
      var st = window.scrollY;

      if (st > headerH) {
        if (fst > st) {
          menu.style.position = "fixed";
          menu.style.top = ctr + "px";

          ctr += 10;
          if (ctr >= 0) ctr = 0;
        }
        if (st > fst) {
          menu.style.position = "fixed";
          menu.style.top = ctr + "px";

          ctr -= 10;
          if (ctr <= -menuH) ctr = -menuH;
        }
      } else {
        menu.style.position = "absolute";
        menu.style.top = headerH + "px";
      }

      fst = st;
    }
    return () => {

    }
  }, [top])
  return (
    <StyledMenuBar top={top} id="menu">
      <StyledMenuLinks>
        <StyledLogoDiv showLogo={showLogo}>
          <Link to="/" onClick={scrollToTop}><StyledLogo className="linkClass imgLink" src={logo} alt="logo" /></Link>
        </StyledLogoDiv>
        <StyledLinks>
          <MenuLink src={"/products"} title={"PRODUCTS"} clickEvent={scrollToTop} />
          <MenuLink src={"/technology"} title={"TECHNOLOGY"} clickEvent={scrollToTop} />
          <MenuLink src={"/contact"} title={"CONTACT"} clickEvent={scrollToTop} />
          <MenuLink src={"/service"} title={"SERVICE"} clickEvent={scrollToTop} />
        </StyledLinks>
      </StyledMenuLinks>
      <StyledHiddenMenu id="hiddenMenu">
        <StyledLogoDiv showLogo={"block"}>
          <Link to="/" onClick={scrollToTop} ><StyledLogo className="linkClass imgLink" src={logo} alt="logo" /></Link>
        </StyledLogoDiv>
        <StyledHiddenMenuBtn className="linkClass" onClick={showHiddenBtn}>MENU</StyledHiddenMenuBtn>
        <StyledHiddenMenuLinks vsb={vsb}>
          <MenuLink src={"/products"} title={"PRODUCTS"} clickEvent={scrollToTop} />
          <MenuLink src={"/technology"} title={"TECHNOLOGY"} clickEvent={scrollToTop} />
          <MenuLink src={"/contact"} title={"CONTACT"} clickEvent={scrollToTop} />
          <MenuLink src={"/service"} title={"SERVICE"} clickEvent={scrollToTop} />
        </StyledHiddenMenuLinks>
      </StyledHiddenMenu>
    </StyledMenuBar>
  )
}

Menu.defaultProps = {
  showLogo: "none",
  p: 0,
  m: 0,
  b: 0
}

export default Menu;