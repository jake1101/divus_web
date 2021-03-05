import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../image/logo/logo_w_colored.png';

const StyledFlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLeftLinkDiv = styled.div`
  padding: 40px 0 0 50px;
`;

const StyledH2 = styled.h2`
  display: inline-block;
  margin: 0 0 0 40px;
`;

const StyledBottomDiv = styled.div`
  width: 100%;
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
        <StyledFlexDiv>
          <StyledFlexDiv className="footerL">
            <div>
              <Link to="/"><img className="linkClass imgLink" src={logo} alt="logo" width="200" /></Link>
            </div>
            <StyledLeftLinkDiv className="footerLink">
              <Link to="/intro" style={linkStyle} onClick={scrollToTop}><StyledH2 className="linkClass">회사 소개</StyledH2></Link>
              <Link to="/" style={linkStyle} className="mapLink" onClick={onClickMapLink}><StyledH2 className="linkClass">위치</StyledH2></Link>
              <Link to="/contact" style={linkStyle} onClick={scrollToTop}><StyledH2 className="linkClass">문의</StyledH2></Link>
            </StyledLeftLinkDiv>
          </StyledFlexDiv>
          <div className="footerR">
            <div>
              <h2>Address</h2>
              <p>경기도 하남시 검단산로 239 하남시 벤처센터 405호</p>
            </div>
            <div>
              <h2>Phone</h2>
              <p>070-8259-3470</p>
            </div>
            <div>
              <h2>E-mail</h2>
              <p>soju68@gmail.com</p>
            </div>
          </div>
        </StyledFlexDiv>
        <StyledBottomDiv className="footerB">
          <h3>
            © Copyright Divus Corp. All rights reserved.
          </h3>
        </StyledBottomDiv>
      </article>
    </div>
  )
}