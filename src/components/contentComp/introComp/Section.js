import React from 'react';
import styled from 'styled-components';

import History from './content/History';
import Summary from './content/Summary';

import organizationImg from '../../../image/introImg/u427.png';

const StyledSection = styled.section`
  text-align: center;   
`;

const StyledOrgArticle = styled.article`
  padding: 30px 20% 120px 20%;
`;

const StyledOrgTitle = styled.h2`
  font-size: 40px;
  padding: 30px 0 50px 0;
`;

const StyledOrgImg = styled.img`
  width: 100%;
`;


export default function Section() {
  return (
    <StyledSection>
      <History />
      <Summary />
      <StyledOrgArticle>
        <StyledOrgTitle>조직도</StyledOrgTitle>
        <StyledOrgImg src={organizationImg} />
      </StyledOrgArticle>
    </StyledSection>
  )
}
