import React from 'react'
import styled from 'styled-components';

import image from '../../../../image/productsImgs/article/u62.png';

const StyledH2 = styled.h2`
  padding: 0 0 30px 0;
`;

const StyledImgDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FactoryArt2 = () => {
  return (
    <article className="articleGray">
      <StyledH2>원재료 입고 부터 출고, 및 분석 단계 까지 모바일 앱으로 생산 관리 전과정 관리</StyledH2>
      <StyledImgDiv>
        <img src={image} width={"832px"} />
      </StyledImgDiv>
    </article>
  )
}

export default FactoryArt2
