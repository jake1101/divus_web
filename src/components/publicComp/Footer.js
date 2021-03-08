import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../image/logo/logo_w_colored.png';

const StyledTopDiv = styled.div`
  display: flex;
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
  padding: 35px 0 0 60px;
`;

const StyledAddressDiv = styled.div`
  padding: 4px 0 0 60px;
`;

const StyledH2 = styled.h2`
  padding: 0 30px 0 0;
`;

const StyledMidDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 0 0;
`;

const StyledTxtDiv = styled.div`
  text-align: left;
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
          <div>
            <StyledLinkDiv className="footerLink">
              <StyledH2 className="linkClass"><Link to="/intro" style={linkStyle} onClick={scrollToTop}>회사 소개</Link></StyledH2>
              <StyledH2 className="linkClass"><Link to="/" style={linkStyle} className="mapLink" onClick={onClickMapLink}>위치</Link></StyledH2>
              <StyledH2 className="linkClass"><Link to="/contact" style={linkStyle} onClick={scrollToTop}>문의</Link></StyledH2>
            </StyledLinkDiv>
            <StyledAddressDiv>
              <p>경기도 하남시 검단산로 239 하남시 벤처센터 405호</p>
            </StyledAddressDiv>
          </div>
        </StyledTopDiv>

        <StyledMidDiv className="footerM">
          <StyledTxtDiv>
            <h3>Phone: </h3>
            <span>070-8259-3470</span>
          </StyledTxtDiv>
          <StyledTxtDiv>
            <h3>E-mail: </h3>
            <span>soju68@gmail.com</span>
          </StyledTxtDiv>
        </StyledMidDiv>

        <div className="footerB">
          <h3>
            © Copyright Divus Corp. All rights reserved.
          </h3>
        </div>

      </article>
    </div>
  )
}