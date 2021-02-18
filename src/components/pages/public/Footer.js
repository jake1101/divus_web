import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../../image/logo/logo_w_colored.png';

import $ from 'jquery';

const StyledFooter = styled.footer`
    position: absolute;
    top: 100%;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 300px;
    color: #ded2cf;
    background: #46413b;
`;

const StyledFooterDiv = styled.div`
    margin: 30px 30px 0 30px;
`;

const StyledLeftSection = styled.section`
    float: left;
    display: flex;
    justify-content: space-around;
    height: 100px;
    line-height: 100%;
    margin-left: 20px;
`;

const StyledRighSection = styled.section`
    float: right;
    padding: 0;
    margin: 0;
    height: 125px;
    padding-top: 25px;
    margin-right: 30px;
`;

const StyledBottomSection = styled.section`
    clear: both;
    display: flex;
    justify-content: center;
    height: 120px;
    line-height: 100px;
`;

const StyledLogoText = styled.p`
    margin: 0 auto;
    text-align: right;
    font-size: 11px;
`;

const StyledMenuDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 600px;
    height: 100px;
    line-height: 30px;
`;

const StyledFooterLink = styled.h3`
    color: #fff;
    margin: 39px 20px 20px 20px;
    &:hover {
        color: #dcdbe1;
        margin-bottom: -3px;
        border-bottom: 3px solid #fff;
    }
`;

const StyledFooterInfo = styled.div`
    height: 60px;
`;

const StyledFooterInfoTitle = styled.p`
    padding: 0;
    margin: 0;
    font-size: 15px;
    font-weight: 100;
`;

const StyledFooterInfoDesc = styled.h4`
    margin: 0;
    padding: 0;
    font-weight: 100;
`;

const StyledSetScrollTop = styled.button`
    display: none;
    font-size: 40px;
    width: 60px;
    background-color: rgba(0,0,0,0);
    border: 1px solid;
    border-radius: 6px;
    position: fixed;
    bottom: 40px;
    left: 90%;
    color: rgba(190,186,181,0.7);
    outline: 0;

    &:hover {
        cursor: pointer;
        color: rgba(220,219,225,1);
        border: 2px solid;
    }
`;

const FooterHomeLink = function(){
    return(
        <a href="/"><img id={"logo"} src={logo} alt="logo" /></a>
    )
};

const FooterLogo = function(){
    return(
        <div>
            <FooterHomeLink />
            <StyledLogoText>(주)디우스</StyledLogoText>
        </div>
    )
};

const FooterLink = function(props){
    return(
        <NavLink to={props.src} activeClassName={"f_selected"}>
            <StyledFooterLink>{props.title}</StyledFooterLink>
        </NavLink>
    )
};

const FooterLeftDiv = function() {
    return(
        <StyledLeftSection>
            <FooterLogo />
            <StyledMenuDiv>
                <FooterLink src={"/products"} title={"PRODUCTS"} />
                <FooterLink src={"/technology"} title={"Technology"} />
                <FooterLink src={"/contact"} title={"Contact"} />
                <FooterLink src={"/service"} title={"Service"} />
            </StyledMenuDiv>
        </StyledLeftSection>        
    )
};

const FooterInfo = function(props) {
    return(
        <StyledFooterInfo>
            <StyledFooterInfoTitle>
                {props.title}
            </StyledFooterInfoTitle>
            <StyledFooterInfoDesc>
                {props.desc}
            </StyledFooterInfoDesc>
        </StyledFooterInfo>
        
    )
};

const FooterRightDiv = function() {
    return(
        <StyledRighSection>
            <FooterInfo title={"Address: "} desc={"경기도 하남시 검단산로 239 하남시벤처센터 405호"}/>
            <FooterInfo title={"E-mail: "} desc={"soju68@gmail.com"}/>
        </StyledRighSection>
    )
};

const FooterBottomDiv = function() {
    return(
        <StyledBottomSection>
            <p>© Copyright Divus Corp. All rights reserved.</p>
        </StyledBottomSection>
    )
};

const SetScrollTop = function() {
    useEffect(()=>{
        const btn = document.getElementById("setSclBtn");
        const offsetHeight = window.document.body.offsetHeight;

        btn.addEventListener("click", () => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        });

        $(window).scroll(function() {
            var st = $(this).scrollTop();
            if(st > offsetHeight * 0.8) btn.style.display = "block";
            else btn.style.display = "none";
        });
    })
    return(
        <StyledSetScrollTop id="setSclBtn"><i className="fas fa-angle-double-up"></i></StyledSetScrollTop>
    )
};

export default function Footer() {
    return(
        <StyledFooter>
            <StyledFooterDiv>
                <FooterLeftDiv />
                <FooterRightDiv />
                <FooterBottomDiv />
            </StyledFooterDiv>
            <SetScrollTop/>
        </StyledFooter>
    )
}