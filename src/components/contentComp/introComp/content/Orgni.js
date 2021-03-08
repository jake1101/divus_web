import React from 'react';
import styled from 'styled-components';

import organizationImg from '../../../../image/introImg/u427.png';

const Orgni = () => {
  const StyledOrgWrap = styled.div`
    margin: 0 auto;
  `;

  const StyledOrgTitle = styled.h2`
    font-size: 40px;
    padding: 30px 0 50px 0;
  `;

  const StyledOrgImg = styled.img`
    width: 100%;
  `;
  return (
    <article className="articleGray articleClass">
      <StyledOrgWrap>
        <StyledOrgTitle>조직도</StyledOrgTitle>
        <StyledOrgImg src={organizationImg} />
      </StyledOrgWrap>
    </article>
  )
}

export default Orgni
