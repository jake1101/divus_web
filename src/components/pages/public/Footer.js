import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../../image/logo/logo189x65.png';

const StyledFooter = styled.footer`
    position: absolute;
    top: 100%;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 300px;
    color: white;
    background: linear-gradient(white, black);
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
    color: white;
    margin: 39px 20px 20px 20px;
    &:hover {
        color: black;
        margin-bottom: -3px;
        border-bottom: 3px solid black;
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

const FooterHomeLink = function(){
    return(
        <a href="/"><img src={logo} alt="logo" /></a>
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

export default function Footer() {
    return(
        <StyledFooter>
            <StyledFooterDiv>
                <FooterLeftDiv />
                <FooterRightDiv />
                <FooterBottomDiv />
            </StyledFooterDiv>
        </StyledFooter>
    )
};