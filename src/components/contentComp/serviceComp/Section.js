import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import DemoLogin from './DemoLogin';

const Section = () => {
  const StyledTextH2 = styled.h2`
    font-size: 30px;
    padding: 0 0 160px 0;
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
  return (
    <section className="contSection">
      <article className="articleGray">
        <DemoLogin />
        <NavLink to={"/contact"} activeClassName={"f_selected"}>
          <StyledLinkBtn className="serviceBtn">
            문의하기
          </StyledLinkBtn>
        </NavLink>
      </article>
    </section>
  )
}

export default Section
