import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../image/logo/logo_w_colored.png';

const StyledTopDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const StyledLogoDiv = styled.div`
  position: relative;
`;

const StyledLogoP = styled.p`
  position: absolute;
  left: 125px;
`;

const StyledLinkDiv = styled.div`
  display: flex;
  padding: 5px 0 0 0;
`;

const StyledAddressDiv = styled.div`
  padding: 10px 0 0 0;
`;

const StyledH2 = styled.h2`
  margin: 0 30px 0 0;
`;

const StyledTxtDiv = styled.div`
  text-align: left;
  line-height: 45px;
`;

const StyledH3 = styled.h3`
  display: inline;
`;

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

export default function Footer() {
  const [pos] = useState({ top: 0, left: 0, behavior: 'smooth' });
  const scrollToTop = () => { window.scrollTo(pos); }
  const onClickMapLink = () => { localStorage.setItem("onScrollMap", "true"); }
  return (
    <div className="footer">
      <article className="articleFooter">

        <StyledTopDiv className="footerT">
          <StyledLogoDiv>
            <Link to="/"><img className="linkClass imgLink" src={logo} alt="logo" width="200" /></Link>
            <StyledLogoP>(주)디우스</StyledLogoP>
          </StyledLogoDiv>
          <div className="footerTm">
            <StyledLinkDiv className="footerLink">
              <Link to="/intro" style={linkStyle} onClick={scrollToTop}><StyledH2 className="linkClass">회사 소개</StyledH2></Link>
              <Link to="/" style={linkStyle} className="mapLink" onClick={onClickMapLink}><StyledH2 className="linkClass">위치</StyledH2></Link>
              <Link to="/contact" style={linkStyle} onClick={scrollToTop}><StyledH2 className="linkClass">문의</StyledH2></Link>
            </StyledLinkDiv>
            <StyledAddressDiv>
              <p>경기도 하남시 검단산로 239 하남시 벤처센터 405호</p>
            </StyledAddressDiv>
          </div>
          <StyledTxtDiv className="footerTxt">
            <div className="fTxtDiv">
              <StyledH3 className="fH3">Phone: </StyledH3>
              <span className="fSpan">070-8259-3470</span>
            </div>
            <div className="fTxtDiv">
              <StyledH3 className="fH3">E-mail: </StyledH3>
              <span className="fSpan">soju68@gmail.com</span>
            </div>
          </StyledTxtDiv>
        </StyledTopDiv>

        <div className="footerB">
          <h3>
            © Copyright Divus Corp. All rights reserved.
          </h3>
        </div>

      </article>
    </div>
  )
}