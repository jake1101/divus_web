import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../Header';
import DemoLogin from './DemoLogin';
import Footer from '../../publicComp/Footer';

const StyledContentWrap = styled.div`
    padding: 30px 20% 120px 20%;
    text-align: center;
`;

const SytledContentDiv = styled.div`

`;

const StyledTextH2 = styled.h2`
    font-size: 80px;
`;

const StyledLinkBtn = styled.h2`
    padding: 60px 0 0 0;
    color: #fff;
    display: inline-block;
    &:hover {
        color: #dcdbe1;
        margin-bottom: -3px;
        border-bottom: 3px solid #fff;
    }
`;

export default function Service() {
  return (
    <div className="content">
      <Header f={"AUTHENTICATED USERS"} l={"CAN DEMONSTRATE THE PRODUCT."} />
      <StyledContentWrap className="service">
        <SytledContentDiv>
          <StyledTextH2 className="serviceH2">승인된 사용자만 이용할 수 있는 페이지 입니다.</StyledTextH2>
          <NavLink to={"/contact"} activeClassName={"f_selected"}>
            <StyledLinkBtn className="serviceBtn">
              문의하기
            </StyledLinkBtn>
          </NavLink>
          <DemoLogin />
        </SytledContentDiv>
      </StyledContentWrap>
      <Footer />
    </div>
  )
}