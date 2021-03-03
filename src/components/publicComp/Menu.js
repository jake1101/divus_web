import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../image/logo/circleLogo.png';

const StyledMenu = styled.menu`
    margin: 0;
    padding: 0;
`;

const StyledMenuBar = styled.div`
    position: relative;
    width: 100%;
    padding: 44px 0 44px 0;
    background-color: rgba(0,0,0,0);
    z-index: 299;
`;

const StyledMenuLogo = styled.div`
    position: absolute;
    top: 20px;
    opacity: ${props => props.opa};
    padding-left: 48px;
`;

const StyledMenuLinks = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledLink = styled.h3`
    &:hover {
        color: #ded2cf;
        margin-bottom: -3px;
        border-bottom: 3px solid #fff;
    }
`;

const StyledHiddenMenu = styled.div`
    position: absolute;
    top: 25px;
    right: 50px;
    visibility: hidden;
`;

const StyledHiddenMenuBtn = styled.h2`
    padding: 15px 0 0 0;
    font-size: 40px;
    &:hover {
        cursor: pointer;
        color: #ded2cf;
        margin-bottom: -3px;
        border-bottom: 3px solid #fff;
    }
`;

const StyledHiddenMenuLinks = styled.div`
    position: absolute;
    top: 60px;
    right: 0;
    text-align: right;
    visibility: hidden;
    padding: 20px 0 20px 40px;
`;

const imgStyle = {
  width: "90px",
  padding: "0px 0px 0px 40px"
}

const linkStyle = {
  padding: "12px 30px 12px 30px",
  color: "#fff",
  textDecoration: "none",
};

const MenuLink = function (props) {
  return (
    <NavLink className="linkClass" style={linkStyle} activeClassName={"m_selected"} to={props.src}>
      <StyledLink>{props.title}</StyledLink>
    </NavLink>
  )
};

export default function Menu(props) {
  useEffect(() => {
    var fLink = document.querySelector(".fLink");
    var linkClass = document.getElementsByClassName("linkClass");
    var menu = document.querySelector("#menu");
    var headerH = document.querySelector(".header").offsetHeight;
    var menuH = menu.offsetHeight;

    var fst = 0;
    var ctr = 0;

    var hiddenBtn = document.getElementById("hiddenBtn");
    var hiddenMenuLinks = document.getElementById("hiddenMenuLinks");

    menu.style.top = headerH + "px";

    fLink.addEventListener("click", (e) => {
      menu.style.backgroundColor = "black";
      menu.style.position = "absolute";
      menu.style.top = "-137px";
    })

    window.addEventListener("scroll", () => {
      for (var i = 0; i < linkClass.length; i++) {
        linkClass[i].addEventListener("click", () => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        })
      }
      scrolled();
    });

    const scrolled = function () {
      var st = window.scrollY;

      if (st > headerH) {
        if (fst > st) {
          menu.style.backgroundColor = "black";
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
        menu.style.backgroundColor = "rgba(0, 0, 0, 0)"
      }

      fst = st;
    }

    hiddenBtn.addEventListener("click", function () {
      if (!hiddenMenuLinks.style.visibility || hiddenMenuLinks.style.visibility === "hidden") {
        hiddenMenuLinks.style.visibility = "visible";
      } else hiddenMenuLinks.style.visibility = "hidden";
    })

    hiddenMenuLinks.addEventListener("mouseleave", function () {
      hiddenMenuLinks.style.visibility = "hidden";
    })
  })
  return (
    <StyledMenu id={"menu"}>
      <StyledMenuBar id={"menuBar"}>
        <StyledMenuLogo id={"menuLogo"} opa={props.opa}>
          <Link className="linkClass" to="/"><img style={imgStyle} id={"logo"} src={logo} alt="logo" /></Link>
        </StyledMenuLogo>
        <StyledMenuLinks id="menuLinks">
          <MenuLink src={"/products"} title={"PRODUCTS"} opa={1} />
          <MenuLink src={"/technology"} title={"TECHNOLOGY"} opa={1} />
          <MenuLink src={"/contact"} title={"CONTACT"} opa={1} />
          <MenuLink src={"/service"} title={"SERVICE"} opa={1} />
        </StyledMenuLinks>
        <StyledHiddenMenu id="hiddenMenu">
          <StyledHiddenMenuBtn id="hiddenBtn">MENU</StyledHiddenMenuBtn>
          <StyledHiddenMenuLinks id="hiddenMenuLinks">
            <MenuLink src={"/products"} title={"PRODUCTS"} opa={1} />
            <MenuLink src={"/technology"} title={"TECHNOLOGY"} opa={1} />
            <MenuLink src={"/contact"} title={"CONTACT"} opa={1} />
            <MenuLink src={"/service"} title={"SERVICE"} opa={1} />
          </StyledHiddenMenuLinks>
        </StyledHiddenMenu>
      </StyledMenuBar>
    </StyledMenu>
  )
}

/*

 var stHeader = $(".headerDiv")[0].scrollHeight,
      stMenu = $("#menuBar")[0].scrollHeight,
      stM = stHeader - stMenu,
      mt = -stMenu,
      fst = 0,
      opa = props.opa,
      bgOpa = 0;

    if (!$(this).scrollTop()) {
      opa = props.opa;
      bgOpa = 0;
    }

    $("#hiddenBtn").off().on("click", () => {
      if (!$("#hiddenMenuLinks")[0].style.visibility || $("#hiddenMenuLinks")[0].style.visibility === "hidden") $("#hiddenMenuLinks").css({ visibility: "visible" });
      else $("#hiddenMenuLinks")[0].style.visibility = "hidden"
    })

    $("#hiddenMenuLinks").on("mouseleave", () => $("#hiddenMenuLinks")[0].style.visibility = "hidden");

    $(window).scroll(function () {
      $(".linkClass").on("click", function () {
        $(window).scrollTop(0);
        $("#menuBar").css({
          top: 0
        })
      })
      var st = $(this).scrollTop();

      if (st > stM) {
        if (fst > st) {
          bgOpa = 0.8;
          $("#menuBar").css({
            position: "fixed",
            top: mt,
            backgroundColor: `rgba(102,102,102,${bgOpa})`
          });
          $("#menuLogo").css({
            opacity: opa
          });

          mt += 10;
          opa += 0.05;
          if (mt >= 0) mt = 0;
          if (opa >= 1) opa = 1;
        } else {
          if (fst > stHeader) {
            $("#menuBar").css({
              position: "fixed",
              top: mt,
            });
            $("#menuLogo").css({
              opacity: opa
            });

            mt -= 10;
            opa -= 0.2;
            if (mt <= -stMenu) mt = -stMenu;
            if (opa <= 0) opa = 0;
          }
        }
      } else {
        $("#menuBar").css({
          position: "relative",
          top: 0,
          backgroundColor: `rgba(102,102,102,${bgOpa})`
        });
        $("#menuLogo").css({
          opacity: opa
        });

        mt = -stMenu;
        opa -= 0.1;
        bgOpa -= 0.1;
        if (opa <= 0) opa = 0;
        if (bgOpa <= 0) opa = 0;
      }
      fst = st;

      if (st <= 0) {
        bgOpa = 0;
        fst = 0;
      }
    })


*/
